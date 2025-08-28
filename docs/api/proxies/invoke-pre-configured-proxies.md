---
title: Invoke Pre-Configured Proxy
---

import { HttpMethod, HttpMethods } from "@site/src/components/shared/HttpMethod";
import { Permission } from "@site/src/components/shared/Permission";
import ReservedHeaders from "./_reserved_headers.mdx";
import CustomHeaders from "./_custom_headers.mdx";
import { Enterprise } from "@site/src/components/shared/Enterprise";
import { Alert, Alerts } from "@site/src/components/shared/Alert";

## Destination URLs

The configured destination URL must use HTTPS with DNS as the host (explicit IP addresses are not allowed). Destinations must use HTTPS >= TLSv1.2.

The destination URL will serve as the base URL for the proxied request, and any path and/or query parameters on your request path (`/proxy/**`) will be appended to the base URL before forwarding the request.

For example, sending a proxy request to `https://api.basistheory.com/proxy/foo/bar?param=value` and including the header `BT-PROXY-URL=https://example.com/api` will result in the request being forwarded to `https://example.com/api/foo/bar?param=value`.

<Alert>The Proxy removes trailing slashes from the destination URL to ensure proper concatenation of contents following <code>/proxy</code>.</Alert>

<Alert type="warning">If the destination endpoint takes more than 25 seconds to respond, a <code>408 Request Timeout</code> error will be returned.</Alert>


## Invoke Proxy

Invoke a pre-configured proxy instance.

<Alert type={Alerts.INFO}>Need to create a pre-configured proxy first? See <a href="/docs/api/proxies/pre-configured-proxies">Pre-Configured Proxies</a> for setup instructions.</Alert>

<HttpMethod method={HttpMethods.POST} endpoint="https://api.basistheory.com/proxy" />

<HttpMethod method={HttpMethods.GET} endpoint="https://api.basistheory.com/proxy" />

<HttpMethod method={HttpMethods.PUT} endpoint="https://api.basistheory.com/proxy" />

<HttpMethod method={HttpMethods.PATCH} endpoint="https://api.basistheory.com/proxy" />

<HttpMethod method={HttpMethods.DELETE} endpoint="https://api.basistheory.com/proxy" />

### Authentication

Pre-configured proxies can be configured to either require authentication or allow anonymous requests.
When authentication is required, a `BT-API-KEY` header must be provided with the request (see [Authentication](/docs/api/authentication)).

Unauthenticated proxy requests may be desired when receiving inbound requests from a third party.
This would allow any caller who knows your unique proxy key to make inbound requests through the proxy
without needing to share a Basis Theory API key with third parties.

Any authentication required by the destination service can be set on the request and will be forwarded through the proxy
(for example, by setting an `Authorization` header).

### Permissions

<Permission content="proxy:invoke" />
<br/>
<Alert type={Alerts.INFO}>For existing proxies and to maintain backward compatibility we are also supporting `token:use`, however we recommend updating the permissions since that will be deprecated soon.</Alert>

### Custom Headers

<CustomHeaders />


#### Reserved Proxy Headers <Enterprise />

<ReservedHeaders />

#### Custom Proxy Response Headers

<CustomHeaders />

#### Encrypted Token Header

The `BT-ENCRYPTED` header allows you to pass encrypted token requests to proxy destinations. This header accepts a base64-encoded token request containing encrypted JWE (JSON Web Encryption) data instead of plaintext.

##### Header Format

The `BT-ENCRYPTED` header should contain a base64-encoded token request with the following structure:

**Single Token Request:**
```json
{
  "type": "card",
  "encrypted": "<JWE_STRING>"
}
```

**Multiple Token Requests:**
```json
{
  "creditCard": {
    "type": "card",
    "encrypted": "<JWE_STRING>"
  },
  "bankAccount": {
    "type": "bank",
    "encrypted": "<JWE_STRING>"
  },
  "personalInfo": {
    "type": "token",
    "encrypted": "<JWE_STRING>"
  }
}
```

To see how to use this header with the proxy, see [Using Encrypted Data in Proxy Requests](#using-encrypted-data-in-proxy-requests).
You can encrypt a token and get the JWE data with the [Basis Theory SDKs](/docs/sdks/web/web-elements/services#encrypting-data).

### Request

The unique key for a pre-configured proxy can either be supplied in a request header or a query string parameter.

```shell title="Request with 'BT-PROXY-KEY' header" showLineNumbers
curl "https://api.basistheory.com/proxy" \
  -H "BT-API-KEY: <PRIVATE_API_KEY>" \
  -H "BT-PROXY-KEY: e29a50980ca5" \
  -H "Content-Type: application/json" \
  -X "POST" \
  -d '{
    "parameter1": "{{26818785-547b-4b28-b0fa-531377e99f4e}}",
    "parameter2": "non-sensitive"
  }'
```

```shell title="Request with 'bt-proxy-key' query param" showLineNumbers
curl "https://api.basistheory.com/proxy?bt-proxy-key=e29a50980ca5" \
  -H "BT-API-KEY: <PRIVATE_API_KEY>" \
  -H "Content-Type: application/json" \
  -X "POST" \
  -d '{
    "parameter1": "{{26818785-547b-4b28-b0fa-531377e99f4e}}",
    "parameter2": "non-sensitive"
  }'
```

<Alert><span> The header  <b>BT-PROXY-URL</b> will be ignored for Pre-Configured proxies</span></Alert>

### Response

The raw response from the destination will be returned from the proxy, unless an error occurs within the Basis Theory Proxy while processing the request.

If an error occurs within the proxy (e.g., an invalid detokenization expression was found), then the following error response will be returned:

| Attribute     | Type  | Description                                       |
|---------------|-------|---------------------------------------------------|
| `proxy_error` | _any_ | A standard Basis Theory [error](/docs/api/errors) |

## Using Encrypted Data in Proxy Requests

You can reference the decrypted data in your proxy request body using the `encrypted` keyword with Liquid expressions:

```shell showLineNumbers
curl "https://api.basistheory.com/proxy" \
  -H "BT-API-KEY: <PRIVATE_API_KEY>" \
  -H "BT-PROXY-KEY: e29a50980ca5" \
  -H "BT-ENCRYPTED: <BASE64_ENCODED_TOKEN_REQUEST>" \
  -H "Content-Type: application/json" \
  -X "POST" \
  -d '{
    "accountNumber": "{{ encrypted | json: \"$.data.number\" }}",
    "expMonth": "{{ encrypted | json: \"$.data.expiration_month\" }}",
    "expYear": "{{ encrypted | json: \"$.data.expiration_year\" }}"
  }'
```

For multiple token requests, you can access specific tokens. The object key is used to reference the token in the Liquid expression.

```json
// Token requests before encryption:
{
  "tokenA": {
    "type": "card",
    "encrypted": "<JWE_STRING>"
  },
  "tokenB": {
    "type": "token",
    "encrypted": "<JWE_STRING>"
  }
}
```

```shell showLineNumbers
curl "https://api.basistheory.com/proxy" \
  -H "BT-API-KEY: <PRIVATE_API_KEY>" \
  -H "BT-PROXY-KEY: e29a50980ca5" \
  -H "BT-ENCRYPTED: <BASE64_ENCODED_MULTIPLE_TOKEN_REQUEST>" \
  -H "Content-Type: application/json" \
  -X "POST" \
  -d '{
    "cardNumber": "{{ encrypted | json: \"$.tokenA.data.number\" }}",
    "personalInfo": "{{ encrypted | json: \"$.tokenB.data.name\" }}"
  }'
```

#### Custom Headers

<CustomHeaders />


## IP Whitelisting

Some 3rd party services may require whitelisting of Basis Theory IP addresses to allow communication.
You can find our IP list [here](/docs/api/ip-addresses).

<Alert>We can also support single dedicated outbound IP addresses. Please <a href="https://basistheory.com/contact">reach out</a> to our support team if you have specific security requirements that mandate this configuration.</Alert>

## Detokenization

When making a request through either type of Proxy, Basis Theory will attempt to [detokenize](/docs/expressions/detokenization)
any [expressions](/docs/expressions/) present in the request and inject the raw token data in the request body before it is sent
to the downstream destination.

For example, given a token:

```json showLineNumbers
{
  "id": "26818785-547b-4b28-b0fa-531377e99f4e",
  "data": "sensitive data"
}
```

and a proxy request with the body:

```json showLineNumbers
{
  "parameter1": "{{26818785-547b-4b28-b0fa-531377e99f4e}}",
  "parameter2": "non-sensitive data"
}
```

then the following request body will be sent to the destination:

```json showLineNumbers
{
  "parameter1": "sensitive data",
  "parameter2": "non-sensitive data"
}
```

The `proxy:invoke` permission is required in order to detokenize tokens within a proxy request.
At most, 20 tokens may be detokenized within a single proxy request. You can find more information about the supported detokenization expressions [here](/docs/expressions/detokenization).

<Alert>For more detailed examples about how to detokenize within the Proxy, check out our <a href="/docs/expressions/detokenization#examples">Detokenization Examples</a>.</Alert>


## Errors

Please refer to [Proxy Transform Errors](/docs/api/proxies/proxy-errors#proxy-transform-errors) for
the full documentation around handling and returning errors from proxy transforms.


### Proxy Destination Errors

The proxy destination may return an error response, the format of which is completely controlled by the destination API.
When an error occurs at the destination, the response is forwarded through the Basis Theory proxy as-is. In particular, these types of
errors will have the same status code, headers, and response body as returned by the destination API.

Keep in mind, the destination response may be modified by a [response transform](/docs/api/proxies/pre-configured-proxies#response-transforms)
on a pre-configured proxy. Response transforms will only be executed when the destination returns a `2xx` status code, and other non-`2xx`
statuses will result in an immediate response from the proxy.

You can identify whether an error was returned by the destination by inspecting the `BT-PROXY-DESTINATION-STATUS` response header,
which will indicate the status code that Basis Theory received from the destination API.

### Basis Theory Errors

If the proxy request is invalid (e.g., Basis Theory authentication fails, an invalid `BT-PROXY-KEY` is provided,
an invalid [detokenization expression](/docs/expressions/detokenization) is specified)
or if a transform fails (e.g., code contains a syntax error, code throws an error), then the proxy will wrap a standard
[RFC 7807 error](/docs/api/errors) inside a `proxy_error` property to distinguish between Basis Theory errors and destination errors.
For example, an invalid detokenization expression on a proxy request such as:

```json
{
    "invalid": "{{ unknown_token_id }}"
}
```

would result in the following error response:

```json
{
     "proxy_error": {
        "errors": {},
        "title": "Invalid proxy request",
        "status": 400,
        "detail": "Failed to detokenize some tokens: unknown_token_id"
    }
}
```

### Proxy Transform Errors

Custom errors can be returned from request and response transforms by throwing [reactor errors](/docs/api/reactors/reactor-errors#error-types) defined in the
[@basis-theory/basistheory-reactor-formulas-sdk-js](https://www.npmjs.com/package/@basis-theory/basis-theory-reactor-formulas-sdk-js)
npm package (proxy transforms are executed in Basis Theory's secure [serverless reactor](/docs/concepts/what-are-reactors) environment).

Any errors thrown from a transform will cause the proxy request to be terminated and the HTTP response to be immediately returned.
In particular, errors thrown from a request transform will cause the proxy request to terminate _before_ calling the destination API.

#### Reactor Errors

All pre-defined [reactor error types](/docs/api/reactors/reactor-errors#error-types), excluding errors of type `CustomHttpResponseError`,
will be returned in their standard format and wrapped in a `proxy_error` property to distinguish these errors from destination API errors.

For example, a transform containing the following code:

```javascript
const { AuthenticationError } = require('@basis-theory/basis-theory-reactor-formulas-sdk-js');

module.exports = async function (req) {
    const apiKey = req.args.headers['MY-CUSTOM-API-KEY'];

    if (!apiKey)
        throw new AuthenticationError('MY-CUSTOM-API-KEY header is required');

    // ...
}
```

would result in the following error response with a `401` status code if the `MY-CUSTOM-API-KEY` header is omitted:

```json
{
    "proxy_error": {
        "errors": {
            "error": [
                "MY-CUSTOM-API-KEY header is required"
            ]
        },
        "title": "One or more validation errors occurred.",
        "status": 401,
        "detail": "Authentication Failed"
    }
}
```

### Custom Errors

To provide more control over the errors returned from a proxy transform, a [CustomHttpResponseError](/docs/api/reactors/reactor-errors#custom-errors) can be thrown from the transform.
This will enable you to specify a status code, custom headers, and have complete control over the response body that is returned.

For example, a transform containing the following code:

```javascript
const { CustomHttpResponseError } = require('@basis-theory/basis-theory-reactor-formulas-sdk-js');

module.exports = async function (req) {
  throw new CustomHttpResponseError({
    status: 400,
    headers: {
        "Custom-Response-Header-1": "custom-value-1",
        "Custom-Response-Header-2": "custom-value-2"
    },
    body: {
        myCustomError: "My custom error message"
    }
  });
};
```

results in an API response with status code `400`, having the headers:

```text
Custom-Response-Header-1: custom-value-1
Custom-Response-Header-2: custom-value-2
```

and the response body:

```json
{
    "myCustomError": "My custom error message"
}
```
