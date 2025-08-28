---
title: Invoke Ephemeral Proxy
---

import { HttpMethod, HttpMethods } from "@site/src/components/shared/HttpMethod";
import { Permission } from "@site/src/components/shared/Permission";
import ReservedHeaders from "./_reserved_headers.mdx";
import CustomHeaders from "./_custom_headers.mdx";
import { Enterprise } from "@site/src/components/shared/Enterprise";
import { Alert, Alerts } from "@site/src/components/shared/Alert";

# Invoke Ephemeral Proxy

The Basis Theory Proxy can be used to share tokenized data with trusted third parties via outbound HTTP requests.
Some outbound proxy requests simply need to [detokenize](/docs/expressions/detokenization) some tokens in the request and forward
the plaintext data to a destination API over HTTP. Ephemeral proxy requests are a good fit for this use case,
as they don't require any up-front setup, and all configuration is self-contained within the proxy request.

<Alert>Ephemeral proxies can be enabled or disabled per tenant.</Alert>

### Destination URLs

The configured destination URL must use HTTPS with DNS as the host (explicit IP addresses are not allowed). Destinations must use HTTPS >= TLSv1.2.

The destination URL will serve as the base URL for the proxied request, and any path and/or query parameters on your request path (`/proxy/**`) will be appended to the base URL before forwarding the request.

For example, sending a proxy request to `https://api.basistheory.com/proxy/foo/bar?param=value` and including the header `BT-PROXY-URL=https://example.com/api` will result in the request being forwarded to `https://example.com/api/foo/bar?param=value`.

<Alert>The Proxy removes trailing slashes from the destination URL to ensure proper concatenation of contents following <code>/proxy</code>.</Alert>

<Alert type="warning">If the destination endpoint takes more than 25 seconds to respond, a <code>408 Request Timeout</code> error will be returned.</Alert>


## Invoke Proxy

Detokenize and forward an HTTP request through the proxy.

<HttpMethod method={HttpMethods.POST} endpoint="https://api.basistheory.com/proxy" />

<HttpMethod method={HttpMethods.GET} endpoint="https://api.basistheory.com/proxy" />

<HttpMethod method={HttpMethods.PUT} endpoint="https://api.basistheory.com/proxy" />

<HttpMethod method={HttpMethods.PATCH} endpoint="https://api.basistheory.com/proxy" />

<HttpMethod method={HttpMethods.DELETE} endpoint="https://api.basistheory.com/proxy" />

### Authentication

Ephemeral proxy requests require a `BT-API-KEY` header (see [Authentication](/docs/api/authentication)) containing an API key for an authorized `private` application.

Any authentication required by the destination service can be set on the request and it will be forwarded through the proxy
(for example, by setting an `Authorization` header).

### Permissions

<Permission content="proxy:invoke" />
<br />
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

A `BT-PROXY-URL` request header is required - its value defines the base URL to which the request will be proxied.
See [Destination URLs](/docs/api/proxies/#destination-urls) for more information.

```shell showLineNumbers
curl "https://api.basistheory.com/proxy" \
  -H "BT-API-KEY: <PRIVATE_API_KEY>" \
  -H "BT-PROXY-URL: https://example.com/api" \
  -H "Content-Type: application/json" \
  -X "POST" \
  -d '{
    "parameter1": "{{26818785-547b-4b28-b0fa-531377e99f4e}}",
    "parameter2": "non-sensitive"
  }'
```

### Response

The raw response from the destination will be returned from the proxy, unless an error occurs within the Basis Theory Proxy while processing the request.

If an error occurs within the proxy (e.g., an invalid detokenization expression was found), then the following error response will be returned:

| Attribute     | Type  | Description                                       |
| ------------- | ----- | ------------------------------------------------- |
| `proxy_error` | _any_ | A standard Basis Theory [error](/docs/api/errors) |

## Using Encrypted Data in Proxy Requests

You can reference the decrypted data in your proxy request body using the `encrypted` keyword with Liquid expressions:

```shell showLineNumbers
curl "https://api.basistheory.com/proxy" \
  -H "BT-API-KEY: <PRIVATE_API_KEY>" \
  -H "BT-PROXY-URL: https://example.com/api" \
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

```shell showLineNumbers
curl "https://api.basistheory.com/proxy" \
  -H "BT-API-KEY: <PRIVATE_API_KEY>" \
  -H "BT-PROXY-URL: https://example.com/api" \
  -H "BT-ENCRYPTED: <BASE64_ENCODED_MULTIPLE_TOKEN_REQUEST>" \
  -H "Content-Type: application/json" \
  -X "POST" \
  -d '{
    "cardNumber": "{{ encrypted | json: \"$.creditCard.data.number\" }}",
    "routingNumber": "{{ encrypted | json: \"$.bankAccount.data.routing_number\" }}",
    "personalInfo": "{{ encrypted | json: \"$.personalInfo.data.name\" }}"
  }'
```



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
