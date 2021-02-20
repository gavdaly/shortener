# URI `shortener` Template

A template for generating a quick url shortener with a Cloudflare worker.

#### Wrangler

To generate using [wrangler](https://github.com/cloudflare/wrangler)

```
wrangler generate ShortenerName https://github.com/gavdaly/shortener
```

Further documentation for Wrangler can be found [here](https://developers.cloudflare.com/workers/tooling/wrangler).

#### Change the settings

1. Cope the destination below or copy the `wrangler.example.toml` to `wrangler.toml`
2. Create two `KV name spaces`, one for production and one for preview. 
3. Copy the namespaces id and add it to the kv_namespaces
4. Get your account id and zone id
5. Copy them to the toml file
6. run `wrangler publish`

```toml
name = "cfshornener"
type = "javascript"
account_id = ""
workers_dev = true
route = "/"
zone_id = ""
kv_namespaces = [
    {binding = "shortener", id = "", preview_id = ""}
]
```