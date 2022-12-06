# Introduction

<aside class="header-intro-box">
    <span>
        <h4>Expressions</h4>
        <p class="header-intro-body2-font">
          Explore the expression language used throughout the Basis Theory API.
        </p>
        <h6>QUICK LINKS</h6>
        <span class="intro-quick-links">
            <a href="#language">Language</a>
            <a href="./filters">Filters</a>
            <a href="./detokenization">Detokenization</a>
            <a href="./aliasing">Aliasing</a>
            <a href="./fingerprints">Fingerprints</a>
            <a href="./masks">Masks</a>
            <a href="./search-indexes">Search Indexes</a>
        </span>
    </span>
    <img src="/img/expressions-intro.svg"/>
</aside>

Expressions provide a flexible templating language that can be used to apply custom transformations to token data.

Expressions can be used within many API endpoints, including:

- [Reactor](https://developers.basistheory.com/concepts/what-are-reactors) args, to [detokenize](./detokenization) and transform tokens
- [Proxy](https://developers.basistheory.com/concepts/what-is-the-proxy) requests, to [detokenize](./detokenization) and transform tokens
- [Aliasing](#aliasing) when [creating a token](/docs/api/tokens#create-token) or [tokenizing](/docs/api/tokens/tokenize), to specify the id of the created token 
- [fingerprint_expression](./fingerprints) when [creating a token](/docs/api/tokens#create-token) or [tokenizing](/docs/api/tokens/tokenize), to define a value used to generate a token fingerprint
- [mask](./masks) when [creating a token](/docs/api/tokens#create-token) or [tokenizing](/docs/api/tokens/tokenize), to define the mask applied to the token's data when the actor has restricted permissions
- [search_indexes](./search-indexes) when [creating a token](/docs/api/tokens#create-token) or [tokenizing](/docs/api/tokens/tokenize), to define indexes to enable [searching tokens](/docs/api/tokens/search)

## Language

The expression language used within the Basis Theory API is based on the [Liquid template language](https://shopify.github.io/liquid).
While all valid Liquid syntax is supported, Basis Theory expressions are typically formed from a combination of 
[objects](#objects) and [filters](./filters).

### Objects

[Objects](https://shopify.github.io/liquid/basics/introduction/#objects) contain content that will be
rendered when the expression is evaluated, and they are formed by wrapping a statement within double curly braces. For example,
`{{ data.card_number }}` would be evaluated by rendering the `card_number` property within the `data` object.

The variables that are available for reference within an object expression depends on the context in which the expression is used.
When including expressions during token creation (e.g. within `search_indexes`, `fingerprint_expression` or `mask`), 
the `data` variable is automatically bound to the token's `data` value. `metadata` is also available for expressions within
`fingerprint_expression`.

When including expressions within Reactor or Proxy requests, token ids may be specified within object expressions, 
and each token id will be bound to the corresponding token's data value. 
See [detokenization](./detokenization) for further details about this process. 
