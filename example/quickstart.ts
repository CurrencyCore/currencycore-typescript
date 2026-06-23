import { createClient } from '@currencycore/sdk';

async function main() {
  // Reads CURRENCYCORE_API_KEY from the env when apiKey is omitted.
  const api = createClient({ apiKey: process.env.CURRENCYCORE_API_KEY });

  const converted = await api.convert({ from: 'USD', to: 'EUR', amount: 100 });
  console.log('100 USD =', converted.results[0]);

  // Public endpoint, no key required.
  const currencies = await api.currencies();
  console.log('supported currencies:', currencies.length);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
