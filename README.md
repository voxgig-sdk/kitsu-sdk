# Kitsu SDK

Search and browse anime, manga, characters and user libraries from the kitsu.io community catalogue

> TypeScript, Python, PHP, Golang, Ruby, Lua SDKs, a CLI, an interactive REPL, and an MCP server for AI agents — all generated from one OpenAPI spec by [@voxgig/sdkgen](https://github.com/voxgig/sdkgen).

## About Kitsu API

[Kitsu](https://kitsu.io) is a community-driven anime and manga catalogue that exposes a public JSON:API at `https://kitsu.io/api/edge`. The same API powers the Kitsu web and mobile clients, so it covers the catalogue, ratings, episode lists and related metadata used across the site.

The API follows the [JSON:API](https://jsonapi.org/) specification, so resources are fetched at typed paths (for example `/anime`, `/manga`, `/characters`) and support standard query parameters such as `filter[...]`, `sort`, `include` and `page[limit]`. A typical search looks like `GET /anime?filter[text]=tokyo`.

Operational notes: requests to the public catalogue endpoints do not require an API key, but write operations against user libraries require an OAuth access token. CORS is not enabled for the public edge, so browser apps generally call through a proxy or server.

## Try it

**TypeScript**
```bash
npm install kitsu
```

**Python**
```bash
pip install kitsu-sdk
```

**PHP**
```bash
composer require voxgig/kitsu-sdk
```

**Golang**
```bash
go get github.com/voxgig-sdk/kitsu-sdk/go
```

**Ruby**
```bash
gem install kitsu-sdk
```

**Lua**
```bash
luarocks install kitsu-sdk
```

## 30-second quickstart

### TypeScript

```ts
import { KitsuSDK } from 'kitsu'

const client = new KitsuSDK({})

```

See the [TypeScript README](ts/README.md) for the
full guide, or scroll down for the same example in other languages.

## What's in the box

| Surface | Use it for | Path |
| --- | --- | --- |
| **SDK** (TypeScript, Python, PHP, Golang, Ruby, Lua) | App integration | `ts/` `py/` `php/` `go/` `rb/` `lua/` |
| **CLI** | Scripts, CI, ops, one-off API calls | `go-cli/` |
| **MCP server** | AI agents (Claude, Cursor, Cline) | `go-mcp/` |

## Use it from an AI agent (MCP)

The generated MCP server exposes every operation in this SDK as an
[MCP](https://modelcontextprotocol.io) tool that Claude, Cursor or Cline
can call directly. Build and register it:

```bash
cd go-mcp && go build -o kitsu-mcp .
```

Then add it to your agent's MCP config (Claude Desktop, Cursor, etc.):

```json
{
  "mcpServers": {
    "kitsu": {
      "command": "/abs/path/to/kitsu-mcp"
    }
  }
}
```

## Entities

The API exposes one entity:

| Entity | Description | API path |
| --- | --- | --- |
| **Anime** | Anime series and films in the Kitsu catalogue, exposed as JSON:API resources at `/anime` with filters like `filter[text]` for search and standard `include` / `sort` parameters. | `/anime` |

Each entity supports the following operations where available: **load**,
**list**, **create**, **update**, and **remove**.

## Quickstart in other languages

### Python

```python
from kitsu_sdk import KitsuSDK

client = KitsuSDK({})


# Load a specific anime
anime, err = client.Anime(None).load(
    {"id": "example_id"}, None
)
```

### PHP

```php
<?php
require_once 'kitsu_sdk.php';

$client = new KitsuSDK([]);


// Load a specific anime
[$anime, $err] = $client->Anime(null)->load(
    ["id" => "example_id"], null
);
```

### Golang

```go
import sdk "github.com/voxgig-sdk/kitsu-sdk/go"

client := sdk.NewKitsuSDK(map[string]any{})

```

### Ruby

```ruby
require_relative "Kitsu_sdk"

client = KitsuSDK.new({})


# Load a specific anime
anime, err = client.Anime(nil).load(
  { "id" => "example_id" }, nil
)
```

### Lua

```lua
local sdk = require("kitsu_sdk")

local client = sdk.new({})


-- Load a specific anime
local anime, err = client:Anime(nil):load(
  { id = "example_id" }, nil
)
```

## Unit testing in offline mode

Every SDK ships a test mode that swaps the HTTP transport for an
in-memory mock, so unit tests run offline.

### TypeScript

```ts
const client = KitsuSDK.test()
const result = await client.Anime().load({ id: 'test01' })
// result.ok === true, result.data contains mock data
```

### Python

```python
client = KitsuSDK.test(None, None)
result, err = client.Anime(None).load(
    {"id": "test01"}, None
)
```

### PHP

```php
$client = KitsuSDK::test(null, null);
[$result, $err] = $client->Anime(null)->load(
    ["id" => "test01"], null
);
```

### Golang

```go
client := sdk.TestSDK(nil, nil)
result, err := client.Anime(nil).Load(
    map[string]any{"id": "test01"}, nil,
)
```

### Ruby

```ruby
client = KitsuSDK.test(nil, nil)
result, err = client.Anime(nil).load(
  { "id" => "test01" }, nil
)
```

### Lua

```lua
local client = sdk.test(nil, nil)
local result, err = client:Anime(nil):load(
  { id = "test01" }, nil
)
```

## How it works

Every SDK call runs the same five-stage pipeline:

1. **Point** — resolve the API endpoint from the operation definition.
2. **Spec** — build the HTTP specification (URL, method, headers, body).
3. **Request** — send the HTTP request.
4. **Response** — receive and parse the response.
5. **Result** — extract the result data for the caller.

A feature hook fires at each stage (e.g. `PrePoint`, `PreSpec`,
`PreRequest`), so features can inspect or modify the pipeline without
forking the SDK.

### Features

| Feature | Purpose |
| --- | --- |
| **TestFeature** | In-memory mock transport for testing without a live server |

Pass custom features via the `extend` option at construction time.

### Direct and Prepare

For endpoints the entity model doesn't cover, use the low-level methods:

- **`direct(fetchargs)`** — build and send an HTTP request in one step.
- **`prepare(fetchargs)`** — build the request without sending it.

Both accept a map with `path`, `method`, `params`, `query`,
`headers`, and `body`. See the [How-to guides](#how-to-guides) below.

## How-to guides

### Make a direct API call

When the entity interface does not cover an endpoint, use `direct`:

**TypeScript:**
```ts
const result = await client.direct({
  path: '/api/resource/{id}',
  method: 'GET',
  params: { id: 'example' },
})
console.log(result.data)
```

**Python:**
```python
result, err = client.direct({
    "path": "/api/resource/{id}",
    "method": "GET",
    "params": {"id": "example"},
})
```

**PHP:**
```php
[$result, $err] = $client->direct([
    "path" => "/api/resource/{id}",
    "method" => "GET",
    "params" => ["id" => "example"],
]);
```

**Go:**
```go
result, err := client.Direct(map[string]any{
    "path":   "/api/resource/{id}",
    "method": "GET",
    "params": map[string]any{"id": "example"},
})
```

**Ruby:**
```ruby
result, err = client.direct({
  "path" => "/api/resource/{id}",
  "method" => "GET",
  "params" => { "id" => "example" },
})
```

**Lua:**
```lua
local result, err = client:direct({
  path = "/api/resource/{id}",
  method = "GET",
  params = { id = "example" },
})
```

## Per-language documentation

- [TypeScript](ts/README.md)
- [Python](py/README.md)
- [PHP](php/README.md)
- [Golang](go/README.md)
- [Ruby](rb/README.md)
- [Lua](lua/README.md)

## Using the Kitsu API

- Upstream: [https://kitsu.io](https://kitsu.io)
- API docs: [https://kitsu.docs.apiary.io/](https://kitsu.docs.apiary.io/)

---

Generated from the Kitsu API OpenAPI spec by [@voxgig/sdkgen](https://github.com/voxgig/sdkgen).
