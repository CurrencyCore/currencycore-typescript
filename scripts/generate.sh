#!/usr/bin/env bash
# Regenerate the generated client from the vendored openapi.json.
# Hand-written files (package.json, src/index.ts, src/client.ts, README) are
# protected by .openapi-generator-ignore and survive regeneration.
set -euo pipefail
cd "$(dirname "$0")/.."
npx -y @openapitools/openapi-generator-cli generate \
  -i openapi.json -g typescript-fetch -o . \
  --additional-properties=npmName=@currencycore/sdk,supportsES6=true,withoutRuntimeChecks=true

# Workaround for openapi-generator 7.x (typescript-fetch): generated models
# `import { mapValues } from '../runtime'`, but the runtime template omits it.
# Append the helper if the generator didn't emit it. Idempotent.
if ! grep -q "export function mapValues" src/runtime.ts; then
  cat >> src/runtime.ts <<'EOF'

export function mapValues(data: any, fn: (item: any) => any) {
  return Object.keys(data).reduce(
    (acc, key) => ({ ...acc, [key]: fn(data[key]) }),
    {} as { [key: string]: any },
  );
}
EOF
fi
