# Microsoft Authentication Library for PnP (msal-pnp)

## Installation

The MSAL PnP package is available on NPM.

```sh
# pnpm
pnpm add @datyin/msal-pnp @azure/msal-browser @pnp/core @pnp/queryable

# yarn
yarn add @datyin/msal-pnp @azure/msal-browser @pnp/core @pnp/queryable

# or npm
npm install @datyin/msal-pnp @azure/msal-browser @pnp/core @pnp/queryable
```

## Usage

```ts
const sp = spfi().using(
  SPBrowser({ baseUrl: import.meta.env.VITE_SITE_COLLECTION }),
  pnpMSAL(msal, [import.meta.env.VITE_SHAREPOINT_SCOPE]),
);

const graph = graphfi().using(
  GraphBrowser(),
  pnpMSAL(msal, [import.meta.env.VITE_GRAPH_SCOPE]),
);
```

### MsalProvider

Props:

- `configuration`: MSAL configuration object

Events:

- `initialized`: Emitted when MSAL is initialized
- `account-changed`: Emitted when the signed-in account changes
- `accounts-changed`: Emitted when the list of signed-in accounts changes
- `token-changed`: Emitted when the access token changes
- `message`: Emitted when a event message is received from MSAL
- `dispose`: Emitted before the component is destroyed

Provider:

- `msal`: MSAL instance (You can use inject method to access it in child components or use useMsal composable function)

### useMsal

useMsal is a composable function that provides access to the MSAL instance. It can be used in vue components or other typescript/javascript files.

```typescript
import { useMSAL } from "@datyin/msal-vue";

export function login() {
  const msal = useMSAL();

  if (msal) {
    msal.loginRedirect({
      scopes: [
        "user.read",
      ],
    });
  }
}

export function logout() {
  const msal = useMSAL();

  if (msal) {
    msal.logoutRedirect();
  }
}

```

## Samples

See [Sample](../sample/README.md) for a complete example.
