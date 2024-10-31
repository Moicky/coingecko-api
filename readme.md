# CoinGecko API TypeScript Wrapper

This package provides a TypeScript wrapper for the [CoinGecko API](https://www.coingecko.com/en/api) using `fetch`. It includes endpoints for both public and pro APIs, allowing you to interact with CoinGecko’s extensive cryptocurrency data.

## Installation

Install the package via npm:

```bash
npm install @moicky/coingecko-api
```

## Documentation

For full details on API endpoints and usage, refer to the following documentation:

- [Public API Documentation](./docs/public/README.md)
- [Pro API Documentation](./docs/pro/README.md)
- [Dex API Documentation](./docs/dex/README.md)

## Usage

The wrapper exports modules for both public and pro endpoints. Here’s an example of how to use them:

### Public API

```typescript
import { CoinsApi, Configuration } from "@moicky/coingecko-api/public";

const coinsAPI = new CoinsApi(
  new Configuration({
    apiKey: "YOUR_API_KEY",
  })
);

await coinsAPI.coinsList({ includePlatform: true });
```

### Pro API

```typescript
import { CoinsApi, Configuration } from "@moicky/coingecko-api/pro";

const coinsAPI = new CoinsApi(
  new Configuration({
    apiKey: "YOUR_API_KEY",
  })
);

await coinsAPI.coinsIdCirculatingSupplyChart({ id: "bitcoin", days: "2" });
```

## Contributing

To contribute to this project by adding new or updated API endpoints, follow these steps:

1. Open [generate.js](./generate.js) and add the new Swagger JSON file URL to the `swaggerConfigs` object. For example:

   ```typescript
   // Source: https://docs.coingecko.com/v3.0.1/docs/clients-unofficial#swagger-json-official
   const swaggerConfigs = {
     public: "https://docs.coingecko.com/openapi/65bf9cabb0951b0072e2cade",
     pro: "https://docs.coingecko.com/openapi/6584ea6ce07e130056b1af99",
     // Add new configs here
   };
   ```

2. Run the generation script to fetch the latest API definitions and generate TypeScript clients and docs:

   ```bash
   npm run generate
   ```

3. After running the command, the generated files will be located in the appropriate folder within `./generated` and `./dist`.

4. Test your changes and submit a pull request!

## License

This project is licensed under the MIT License.
