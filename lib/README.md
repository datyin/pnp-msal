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
