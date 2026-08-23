-- Republicmag SDK configuration

-- Build a fresh, fully materialised config table. Every call rebuilds the
-- whole structure, so prefer require("config_shared") unless you need a
-- private copy you intend to mutate.
local function make_config()
  return {
    main = {
      name = "Republicmag",
      slug = "republicmag",
      version = "0.0.1",
      target = "lua",
    },
    feature = {
      ["test"] = {
        ["options"] = {
          ["active"] = false,
        },
      },
    },
    options = {
      base = "https://republicmag.io",
      headers = {
        ["content-type"] = "application/json",
      },
      entity = {
        ["post"] = {},
      },
    },
    entity = {
      ["post"] = {
        ["fields"] = {
          {
            ["name"] = "author",
            ["short"] = "Author of the post",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "category",
            ["short"] = "Category of the post (politics, economics, society, culture, etc.)",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "content",
            ["short"] = "Full content of the post",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "excerpt",
            ["short"] = "Short excerpt or summary of the post",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "id",
            ["req"] = true,
            ["short"] = "Unique identifier for the post",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "imageUrl",
            ["short"] = "URL to the post's featured image",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "publishedAt",
            ["req"] = true,
            ["short"] = "Publication date and time of the post",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "tags",
            ["short"] = "Tags associated with the post",
            ["type"] = "`$ARRAY`",
          },
          {
            ["name"] = "title",
            ["req"] = true,
            ["short"] = "Title of the post",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "updatedAt",
            ["short"] = "Last update date and time of the post",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "url",
            ["short"] = "URL to the full post on republicmag.io",
            ["type"] = "`$STRING`",
          },
        },
        ["name"] = "post",
        ["op"] = {
          ["list"] = {
            ["input"] = "data",
            ["name"] = "list",
            ["points"] = {
              {
                ["args"] = {},
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/api/posts/recent",
                ["parts"] = {
                  "api",
                  "posts",
                  "recent",
                },
                ["select"] = {
                  ["$action"] = "recent",
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
              },
            },
          },
        },
        ["relations"] = {
          ["ancestors"] = {},
        },
      },
    },
  }
end


local function make_feature(name)
  local features = require("features")
  local factory = features[name]
  if factory ~= nil then
    return factory()
  end
  return features.base()
end


-- Attach make_feature to the SDK class
local function setup_sdk(SDK)
  SDK._make_feature = make_feature
end


return make_config
