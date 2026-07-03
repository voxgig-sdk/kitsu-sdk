# Kitsu SDK configuration


def make_config():
    return {
        "main": {
            "name": "Kitsu",
        },
        "feature": {
            "test": {
        "options": {
          "active": False,
        },
      },
        },
        "options": {
            "base": "https://kitsu.io/api/edge",
            "auth": {
                "prefix": "Bearer",
            },
            "headers": {
        "content-type": "application/json",
      },
            "entity": {
                "anime": {},
            },
        },
        "entity": {
      "anime": {
        "fields": [],
        "name": "anime",
        "op": {
          "load": {
            "input": "data",
            "name": "load",
            "points": [
              {
                "active": True,
                "args": {
                  "query": [
                    {
                      "active": True,
                      "example": "tokyo",
                      "kind": "query",
                      "name": "filter_text",
                      "orig": "filter_text",
                      "reqd": True,
                      "type": "`$STRING`",
                    },
                    {
                      "active": True,
                      "example": 10,
                      "kind": "query",
                      "name": "page_limit",
                      "orig": "page_limit",
                      "reqd": False,
                      "type": "`$INTEGER`",
                    },
                    {
                      "active": True,
                      "example": 0,
                      "kind": "query",
                      "name": "page_offset",
                      "orig": "page_offset",
                      "reqd": False,
                      "type": "`$INTEGER`",
                    },
                  ],
                },
                "method": "GET",
                "orig": "/anime",
                "parts": [
                  "anime",
                ],
                "select": {
                  "exist": [
                    "filter_text",
                    "page_limit",
                    "page_offset",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "index$": 0,
              },
            ],
            "key$": "load",
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
    },
    }
