# CoinGecko API TypeScript Wrapper

This package provides a TypeScript wrapper for the [CoinGecko API](https://www.coingecko.com/en/api) using `fetch`. It includes endpoints for both public and pro APIs, allowing you to interact with CoinGecko’s extensive cryptocurrency data.

## Installation

Install the package via npm:

```bash
npm install @moicky/coingecko-api
```

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

## Documentation

For full details on API endpoints and usage, refer to the following documentation:

- [Public API Documentation](./docs/public/README.md)
- [Pro API Documentation](./docs/pro/README.md)

## License

This project is licensed under the MIT License.
