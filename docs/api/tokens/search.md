import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Search Tokens

<span class="http-method post">
  <span class="box-method">POST</span>
  `https://api.basistheory.com/tokens/search`
</span>

Search for tokens using a Lucene-based [query syntax](#query-syntax). 
Use this endpoint to perform an advanced token search using token data or to build complex searches combining multiple terms with boolean operators.
For simpler search use cases, see [List Tokens](/docs/api/tokens#list-tokens).

#### Permissions

<p class="scopes">
  <span class="scope">token:search</span>
</p>

## Request

#### Request Parameters

| Attribute | Required | Type      | Default | Description                                                                     |
| --------- | -------- | --------- | ------- | ------------------------------------------------------------------------------- |
| `query`   | false    | *string*  | `null`  | A query string using [Lucene query syntax](#query-syntax). |
| `page`    | false    | *integer* | `1`     | Page number of the results to return.                                           |
| `size`    | false    | *integer* | `20`    | Number of results per page to return. Maximum size of 100 results.              |

<Tabs groupId="languages">
  <TabItem value="shell" label="cURL">

```shell
curl "https://api.basistheory.com/tokens/search" \
  -H "BT-API-KEY: key_N88mVGsp3sCXkykyN2EFED" \
  -H "Content-Type: application/json" \
  -X "POST" \
  -d '{
    "query": "data:6789 AND type:social_security_number",
    "page": 1,
    "size": 20
  }'
```

  </TabItem>
  <TabItem value="javascript" label="JavaScript">

```javascript
import { BasisTheory } from '@basis-theory/basis-theory-js';

const bt = await new BasisTheory().init('key_N88mVGsp3sCXkykyN2EFED');

const tokens = await bt.tokens.search({
  query: 'data:6789 AND type:social_security_number',
  page: 1,
  size: 20
});
```

  </TabItem>
  <TabItem value="csharp" label="C#">

```csharp
using BasisTheory.net.Tokens;

var client = new TokenClient("key_N88mVGsp3sCXkykyN2EFED");

var tokens = await client.SearchAsync(new TokenSearchRequest {
  Query = "data:6789 AND type:social_security_number",
  Page = 1,
  Size = 20);
```

  </TabItem>
  <TabItem value="python" label="Python">

```python
import basistheory
from basistheory.api import tokens_api
from basistheory.model.search_tokens_request import SearchTokensRequest

with basistheory.ApiClient(configuration=basistheory.Configuration(api_key="key_N88mVGsp3sCXkykyN2EFED")) as api_client:
    token_client = tokens_api.TokensApi(api_client)

    tokens = token_client.search(search_tokens_request=SearchTokensRequest(
        query="data:6789 AND type:social_security_number",
        page=1,
        size=20
    ))
```

  </TabItem>
  <TabItem value="go" label="Go">

```go
package main

import (
  "context"
  "github.com/Basis-Theory/basistheory-go/v3"
)

func main() {
  configuration := basistheory.NewConfiguration()
  apiClient := basistheory.NewAPIClient(configuration)
  contextWithAPIKey := context.WithValue(context.Background(), basistheory.ContextAPIKeys, map[string]basistheory.APIKey{
    "ApiKey": {Key: "key_N88mVGsp3sCXkykyN2EFED"},
  })

  searchTokenRequest := *basistheory.NewSearchTokensRequest()
  searchTokenRequest.SetQuery("data:6789 AND type:social_security_number")
  searchTokenRequest.SetPage(1)
  searchTokenRequest.SetSize(20)

  tokens, httpResponse, err := apiClient.TokensApi.Search(contextWithAPIKey).SearchTokensRequest(searchTokenRequest).Execute()
}
```

  </TabItem>
</Tabs>

## Response

Returns a [paginated object](/docs/api/pagination) with the `data` property containing an array of [tokens](/docs/api/tokens#token-object).
Token data will be returned according to the [transform](https://developers.basistheory.com/concepts/access-controls/#transform)
applied to the requesting Application's [Access Controls](https://developers.basistheory.com/concepts/access-controls).
Returns [an error](/docs/api/errors) if tokens could not be retrieved or when an invalid [query](#query-syntax) is submitted.

Token data will be returned in search results according to the [transform](https://developers.basistheory.com/concepts/access-controls/#transform)
applied within the requesting Application's [Access Controls](https://developers.basistheory.com/concepts/access-controls).

```json
{
  "pagination": {...},
  "data": [
    {
      "id": "c06d0789-0a38-40be-b7cc-c28a718f76f1",
      "type": "social_security_number",
      "tenant_id": "77cb0024-123e-41a8-8ff8-a3d5a0fa8a08",
      "data": "XXX-XX-6789",
      "fingerprint": "AKCUXS83DokKo4pDRKSAy4d42t9i8dcP1X2jijwEBCQH",
      "containers": ["/pii/high/"],
      "metadata": {
        "nonSensitiveField": "Non-Sensitive Value"
      },
      "search_indexes": [
        "{{ data }}",
        "{{ data | replace: '-' }}",
        "{{ data | last4 }}"
      ],
      "fingerprint_expression": "{{ data }}",
      "created_by": "fb124bba-f90d-45f0-9a59-5edca27b3b4a",
      "created_at": "2021-03-01T08:23:14+00:00"
    },
    {...},
    {...}
  ]
}
```

## Query Syntax

Token search supports a [Lucene-based query syntax](http://www.lucenetutorial.com/lucene-query-syntax.html) to build complex search criteria. 
A query string is comprised of one or more Terms that can be combined with the `AND` and `OR` Operators.

Search terms are formed by combining a field name and a value to search with a `:` - `field:value`. 
See the [Searchable Token Fields](#searchable-token-fields) table below for a complete list of supported fields. 
For example, to search for tokens having a `type` of `card_number`, query for:

```
  type:card_number
```

Token data may be searched on some token types, by performing a case-insensitive exact match to one of several indexed data patterns.
As an example, the following query will search for tokens containing the data `123-45-6789`:

```
  data:123-45-6789
```

For more detailed information about supported data searches, see [Searching Data](#searching-data).

Phrases or values containing spaces may be searched by wrapping the searched value in quotes, for example:

```
  data:"data containing multiple words"
```

Metadata search terms require both a key and value to be specified in the form of `metadata.key:value`. 
Metadata will be searched for a case-insensitive, exact match.
For example, to search for tokens having the metadata `{ customer_id: "123456" }`, query for:

```
  metadata.customer_id:123456
```

Container search terms support both exact and wildcard matches. An exact container search will only return tokens in
the searched container and will not include tokens in parent or child containers. For example, to return only tokens
in the `/customer-123/pii/` container, you can query:

```
  container:"/customer-123/pii/"
```

Wildcard container searches can be used to match on all tokens within a container or its sub-containers. 
The wildcard character `*` can only appear at the end of a container search term.
For example, to return all tokens for `customer-123` which may be partitioned into sub-containers `/customer-123/pii/` or `/customer-123/general/`, you can query:

```
  container:"/customer-123/*"
```

Date range searches are supported using the Lucene bracketed range syntax. 
`[START_DATE TO END_DATE]` denotes an inclusive range and `{START_DATE TO END_DATE}` denotes an exclusive range. 
Values are formatted as a string in ISO 8601 format and can either represent a date or date and time in UTC.
For example, to search for tokens that were created in the year 2021, you can query:

```
  created_at:[2021-01-01 TO 2021-12-31T23:59:59Z]
```

To search a range without a start or end date, use the wildcard `*` in place of the start or end date, for example:

```
  created_at:{* TO 2022-01-01}
```

Multiple terms may be combined using the `AND`, `OR` and `NOT` operators (case sensitive) and grouped using parentheses. The `NOT` operator could be interchanged with the `!` or `-` symbols. For example:

```
  (type:social_security_number AND !metadata.user_id:1234) OR data:111-11-1111
```

:::info

The supported Lucene syntax is currently limited to the operations documented above, and not all standard Lucene syntax is supported. If you would like to have support for any additional Lucene features, please [let us know](mailto:support@basistheory.com?subject=Token%20Search%20Feature%20Request).

:::

### Searchable Token Fields

| Fields           | Type     | Description                                                             | Example                                            |
| ---------------- | -------- | ----------------------------------------------------------------------- | -------------------------------------------------- |
| `id`             | *string* | Token ID.                                                               | `id:fe24d4cc-de50-4d8c-8da7-8c7483ba21bf`          |
| `type`           | *string* | The [token type](/docs/api/tokens/token-types).                         | `type:card_number`                                 |
| `data`           | *string* | Token data. See [Searching Data](#searching-data) for supported values. | `data:6789`                                        |
| `fingerprint`    | *string* | Token's content unique identifier.                                      | `fingerprint:fe24d4cc-de50-4d8c-8da7-8c7483ba21bf` |
| `container`      | *string* | Searches across a token's containers.                                   | `container:"/pci/high/"`                           |
| `metadata.[key]` | *string* | Search against token metadata having the given `[key]`.                 | `metadata.user_id:34445`                           |
| `created_by`     | *string* | Application ID which created the token.                                 | `created_by:fe24d4cc-de50-4d8c-8da7-8c7483ba21bf`  |
| `created_at`     | *date*   | The date or date and time a token was created in ISO 8601 format.       | `created_at:[2020-01-01 TO 2020-01-28]`            |
| `modified_by`    | *string* | Application ID which last modified the token.                           | `modified_by:fe24d4cc-de50-4d8c-8da7-8c7483ba21bf` |
| `modified_at`    | *date*   | The last date or date and time a token was modified in ISO 8601 format. | `modified_at:[2020-01-01 TO 2020-01-28]`           |

### Searching Data

Basis Theory currently supports data searches on `social_security_number`, `employer_id_number` and `token` token types.
When creating tokens of these types, Basis Theory will securely index several data patterns to enable searching on these values 
based on the `search_indexes` provided in the [Create Token Request](/docs/api/tokens#create-token) or [Tokenize Request](/docs/api/tokens/tokenize).

If `search_indexes` are not provided when creating a token, then `social_security_number` and `employer_id_number` will have the following default search indexes:

- `{{ data }}` which results in the input value being indexed, eg. `123-45-6789`
- `{{ data | remove: '-'}}` which results in the value without delimiters, eg. `123456789`
- `{{ data | last4 }}` which results in the last 4 digits of the value, eg. `6789`

For generic tokens (type `token`), default indexes are not applied, and you are free to specify any desired indexes within the `search_indexes` property during [token creation](/docs/api/tokens#create-token). The `search_indexes` property supports the use of [expressions](#expressions-search-indexes), which are based on the [Liquid templating language](https://shopify.github.io/liquid/). Each expression must result in a single value, which cannot be null or empty, otherwise a 400 error will be returned.

Any expressions contained within `search_indexes` will be evaluated against the token data before generating indexes. Token data searches will only return a token if there is an exact match on one of the evaluated `search_indexes`; full wildcard search is not currently supported.

For example, to search for a `social_security_number` token with the value `123-45-6789`, you may search for: 

```
  data:123-45-6789 AND type:social_security_number
```

To search for all `social_security_number` tokens with the last 4 digits of `6789`, you may search for:

```
  data:6789 AND type:social_security_number
```

Note that the results returned by this query may not be unique if you have stored multiple `social_security_number` tokens ending with the same 4 digits.