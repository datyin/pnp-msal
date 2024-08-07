import type { PublicClientApplication } from "@azure/msal-browser";
import { AuthError, InteractionRequiredAuthError } from "@azure/msal-browser";
import type { TimelinePipe } from "@pnp/core";
import type { Queryable } from "@pnp/queryable";

export function pnpMSAL(msal: PublicClientApplication, scopes: string[]): TimelinePipe<Queryable> {
  return (instance: Queryable) => {
    instance.on.auth.replace(async (url: URL, init: RequestInit) => {
      const response = await msal.acquireTokenSilent({ scopes }).catch((error) => {
        if (error instanceof AuthError || error instanceof InteractionRequiredAuthError) {
          msal.acquireTokenRedirect({ scopes }).catch((error) => {
            console.error("Failed to acquire token.", error);
          });
        }
      });

      if (response?.accessToken == null) {
        throw new Error("Failed to get access token.");
      }

      if (init.headers != null) {
        if (init.headers instanceof Headers) {
          init.headers.append("Authorization", `Bearer ${response.accessToken}`);
        }
        else if (Array.isArray(init.headers)) {
          init.headers.push(["Authorization", `Bearer ${response.accessToken}`]);
        }
        else if (typeof init.headers === "object") {
          init.headers.Authorization = `Bearer ${response.accessToken}`;
        }
      }
      else {
        init.headers = {
          Authorization: `Bearer ${response.accessToken}`,
        };
      }

      return [url, init];
    });

    return instance;
  };
}
