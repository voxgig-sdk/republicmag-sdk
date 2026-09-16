# Republicmag SDK configuration

module RepublicmagConfig
  # Return the process-wide config, built once on first use. The SDK reads
  # the config on every request and never writes to it, so one instance is
  # shared by every client rather than rebuilt per client.
  #
  # The returned hash is shared: treat it as read-only. Callers that need to
  # mutate should use make_config, which always returns a fresh copy.
  def self.shared_config
    @shared_config ||= make_config
  end


  # Build a fresh, fully materialised config hash. Every call rebuilds the
  # whole structure, so prefer shared_config unless you need a private copy
  # you intend to mutate.
  def self.make_config
    {
      "main" => {
        "name" => "Republicmag",
        "slug" => "republicmag",
        "version" => "0.0.1",
        "target" => "rb",
      },
      "feature" => {
        "ratelimit" => {
          "options" => {
            "active" => false,
            "burst" => 5,
            "rate" => 5,
          },
          "optspec" => {
            "now" => "`$FUNCTION`",
            "sleep" => "`$FUNCTION`",
          },
          "strict" => false,
          "transport" => "wrap",
        },
        "retry" => {
          "options" => {
            "active" => false,
            "factor" => 2,
            "maxDelay" => 2000,
            "minDelay" => 50,
            "retries" => 2,
            "statuses" => [
              408,
              425,
              429,
              500,
              502,
              503,
              504,
            ],
          },
          "optspec" => {
            "jitter" => "`$BOOLEAN`",
            "sleep" => "`$FUNCTION`",
          },
          "strict" => false,
          "transport" => "wrap",
        },
        "test" => {
          "options" => {
            "active" => false,
          },
          "optspec" => {
            "entity" => "`$MAP`",
            "net" => "`$MAP`",
          },
          "strict" => false,
          "transport" => "base",
        },
        "timeout" => {
          "options" => {
            "active" => false,
            "ms" => 30000,
          },
          "optspec" => {
            "clearTimer" => "`$FUNCTION`",
            "setTimer" => "`$FUNCTION`",
          },
          "strict" => false,
          "transport" => "wrap",
        },
      },
      "options" => {
        "base" => "https://republicmag.io",
        "headers" => {
          "content-type" => "application/json",
        },
        "entity" => {
          "post" => {},
        },
      },
      "entity" => {
        "post" => {
          "fields" => [
            {
              "name" => "author",
              "short" => "Author of the post",
              "type" => "`$STRING`",
            },
            {
              "name" => "category",
              "short" => "Category of the post (politics, economics, society, culture, etc.)",
              "type" => "`$STRING`",
            },
            {
              "name" => "content",
              "short" => "Full content of the post",
              "type" => "`$STRING`",
            },
            {
              "name" => "excerpt",
              "short" => "Short excerpt or summary of the post",
              "type" => "`$STRING`",
            },
            {
              "name" => "id",
              "req" => true,
              "short" => "Unique identifier for the post",
              "type" => "`$STRING`",
            },
            {
              "format" => "uri",
              "name" => "imageUrl",
              "short" => "URL to the post's featured image",
              "type" => "`$STRING`",
            },
            {
              "format" => "date-time",
              "name" => "publishedAt",
              "req" => true,
              "short" => "Publication date and time of the post",
              "type" => "`$STRING`",
            },
            {
              "name" => "tags",
              "short" => "Tags associated with the post",
              "type" => "`$ARRAY`",
            },
            {
              "name" => "title",
              "req" => true,
              "short" => "Title of the post",
              "type" => "`$STRING`",
            },
            {
              "format" => "date-time",
              "name" => "updatedAt",
              "short" => "Last update date and time of the post",
              "type" => "`$STRING`",
            },
            {
              "format" => "uri",
              "name" => "url",
              "short" => "URL to the full post on republicmag.io",
              "type" => "`$STRING`",
            },
          ],
          "id" => {
            "field" => "id",
            "name" => "id",
          },
          "name" => "post",
          "op" => {
            "list" => {
              "input" => "data",
              "name" => "list",
              "points" => [
                {
                  "args" => {},
                  "kind" => "http",
                  "method" => "GET",
                  "orig" => "/api/posts/recent",
                  "segments" => [
                    {
                      "lit" => "api",
                    },
                    {
                      "lit" => "posts",
                    },
                    {
                      "lit" => "recent",
                    },
                  ],
                  "select" => {
                    "$action" => "recent",
                  },
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                  "parts" => [
                    "api",
                    "posts",
                    "recent",
                  ],
                },
              ],
            },
          },
          "relations" => {
            "ancestors" => [],
          },
        },
      },
    }
  end


  def self.make_feature(name)
    require_relative 'features'
    RepublicmagFeatures.make_feature(name)
  end
end
