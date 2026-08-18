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
            "type": "`$STRING`",
          },
          {
            "name": "category",
            "type": "`$STRING`",
          },
          {
            "name": "content",
            "type": "`$STRING`",
          },
          {
            "name": "excerpt",
            "type": "`$STRING`",
          },
          {
            "name": "id",
            "req": True,
            "type": "`$STRING`",
          },
          {
            "name": "imageUrl",
            "type": "`$STRING`",
          },
          {
            "name": "publishedAt",
            "req": True,
            "type": "`$STRING`",
          },
          {
            "name": "tags",
            "type": "`$ARRAY`",
          },
          {
            "name": "title",
            "req": True,
            "type": "`$STRING`",
          },
          {
            "name": "updatedAt",
            "type": "`$STRING`",
          },
          {
            "name": "url",
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
