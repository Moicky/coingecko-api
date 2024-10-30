import { exec } from "child_process";
import { existsSync, mkdirSync, rmSync, writeFileSync } from "fs";
import { resolve } from "path";
import { promisify } from "util";

const execAsync = promisify(exec);

// Source: https://docs.coingecko.com/v3.0.1/docs/clients-unofficial
const swaggerConfigs = {
  public: "https://docs.coingecko.com/openapi/65bf9cabb0951b0072e2cade",
  pro: "https://docs.coingecko.com/openapi/6584ea6ce07e130056b1af99",
};

const tempDir = resolve("temp");
const generatedDir = resolve("generated");

// Reset generated directory
if (existsSync(generatedDir)) rmSync(generatedDir, { recursive: true });

// Create temp directory
if (!existsSync(tempDir)) mkdirSync(tempDir);

mkdirSync(generatedDir);

Promise.all(
  Object.entries(swaggerConfigs).map(async ([key, url]) => {
    const response = await fetch(url);
    const json = await response.json();

    const info = json.info;
    const jsonFilePath = resolve(tempDir, `${key}.json`);

    writeFileSync(jsonFilePath, JSON.stringify(json, null, 2));
    console.log(`Downloaded ${key}.json: ${info.title}: (${info.version})`);

    const outputDir = resolve(generatedDir, key);

    if (!existsSync(outputDir)) await mkdirSync(outputDir, { recursive: true });

    const command = `openapi-generator-cli generate -i ${jsonFilePath} -g typescript-fetch -o ${outputDir} --skip-validate-spec`;
    await execAsync(command);

    // Clean up
    rmSync(resolve(outputDir, ".openapi-generator"), { recursive: true });
    rmSync(resolve(outputDir, ".openapi-generator-ignore"));

    console.log(`Generated client for ${key} API in ${outputDir}`);
  })
)
  .then(() => rmSync(tempDir, { recursive: true }))
  .then(() => process.exit(0));
