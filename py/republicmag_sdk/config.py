# Republicmag SDK configuration


_shared_config = None


def shared_config():
    """Return the process-wide config, built once on first use.

    The SDK reads the config on every request and never writes to it, so one
    instance is shared by every client rather than rebuilt per client.

    The returned dict is shared: treat it as read-only. Callers that need to
    mutate should use make_config, which always returns a fresh copy.
    """
    global _shared_config
    if _shared_config is None:
        _shared_config = make_config()
    return _shared_config


def make_config():
    """Build a fresh, fully materialised config dict.

    Every call rebuilds the whole structure, so prefer shared_config unless
    you need a private copy you intend to mutate.
    """
    return {
        "main": {
            "name": "Republicmag",
            "slug": "republicmag",
            "version": "0.0.1",
            "target": "py",
        },
        "feature": {
            "test": {
        "options": {
          "active": False,
        },
      },
        },
        "options": {
            "base": "https://republicmag.io",
            "headers": {
        "content-type": "application/json",
      },
            "entity": {
                "post": {},
            },
        },
        "entity": {
      "post": {
        "fields": [
          {
            "name": "author",
            "short": "Author of the post",
            "type": "`$STRING`",
          },
          {
            "name": "category",
            "short": "Category of the post (politics, economics, society, culture, etc.)",
            "type": "`$STRING`",
          },
          {
            "name": "content",
            "short": "Full content of the post",
            "type": "`$STRING`",
          },
          {
            "name": "excerpt",
            "short": "Short excerpt or summary of the post",
            "type": "`$STRING`",
          },
          {
            "name": "id",
            "req": True,
            "short": "Unique identifier for the post",
            "type": "`$STRING`",
          },
          {
            "name": "imageUrl",
            "short": "URL to the post's featured image",
            "type": "`$STRING`",
          },
          {
            "name": "publishedAt",
            "req": True,
            "short": "Publication date and time of the post",
            "type": "`$STRING`",
          },
          {
            "name": "tags",
            "short": "Tags associated with the post",
            "type": "`$ARRAY`",
          },
          {
            "name": "title",
            "req": True,
            "short": "Title of the post",
            "type": "`$STRING`",
          },
          {
            "name": "updatedAt",
            "short": "Last update date and time of the post",
            "type": "`$STRING`",
          },
          {
            "name": "url",
            "short": "URL to the full post on republicmag.io",
            "type": "`$STRING`",
          },
        ],
        "name": "post",
        "op": {
          "list": {
            "input": "data",
            "name": "list",
            "points": [
              {
                "args": {},
                "kind": "http",
                "method": "GET",
                "orig": "/api/posts/recent",
                "parts": [
                  "api",
                  "posts",
                  "recent",
                ],
                "select": {
                  "$action": "recent",
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
              },
            ],
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
    },
    }
