"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FEATURE_PLUGINS = exports.config = void 0;
const TestFeature_1 = require("./feature/test/TestFeature");
const FEATURE_CLASS = {
    test: TestFeature_1.TestFeature,
};
// Per-feature plugin DEFINITIONS (voxgig/plugin `Definition` values), from
// the model's active plugin groups. A feature that takes a `plugins` option
// (secrets over sekreto) reads its own entry; a feature with no plugins has
// none. Named imports above make each definition statically reachable, so
// an SDK carries exactly the plugin modules its model selects — the same
// leanness the old side-effect registry imports bought, without a registry.
const FEATURE_PLUGINS = {};
exports.FEATURE_PLUGINS = FEATURE_PLUGINS;
class Config {
    makeFeature(fn) {
        const fc = FEATURE_CLASS[fn];
        const fi = new fc();
        // TODO: errors etc
        return fi;
    }
    // False for a feature added at runtime via options.extend (station's
    // adopt path) - the constructor uses this to skip makeFeature for names
    // no generated class backs.
    hasFeature(fn) {
        return null != FEATURE_CLASS[fn];
    }
    main = {
        name: 'Republicmag',
        slug: "republicmag",
        version: "0.0.1",
        target: "ts",
    };
    feature = {
        test: {
            "options": {
                "active": false
            },
            "transport": "base"
        },
    };
    options = {
        base: "https://republicmag.io",
        headers: {
            "content-type": "application/json"
        },
        entity: {
            post: {},
        }
    };
    entity = {
        "post": {
            "fields": [
                {
                    "name": "author",
                    "short": "Author of the post",
                    "type": "`$STRING`"
                },
                {
                    "name": "category",
                    "short": "Category of the post (politics, economics, society, culture, etc.)",
                    "type": "`$STRING`"
                },
                {
                    "name": "content",
                    "short": "Full content of the post",
                    "type": "`$STRING`"
                },
                {
                    "name": "excerpt",
                    "short": "Short excerpt or summary of the post",
                    "type": "`$STRING`"
                },
                {
                    "name": "id",
                    "req": true,
                    "short": "Unique identifier for the post",
                    "type": "`$STRING`"
                },
                {
                    "format": "uri",
                    "name": "imageUrl",
                    "short": "URL to the post's featured image",
                    "type": "`$STRING`"
                },
                {
                    "format": "date-time",
                    "name": "publishedAt",
                    "req": true,
                    "short": "Publication date and time of the post",
                    "type": "`$STRING`"
                },
                {
                    "name": "tags",
                    "short": "Tags associated with the post",
                    "type": "`$ARRAY`"
                },
                {
                    "name": "title",
                    "req": true,
                    "short": "Title of the post",
                    "type": "`$STRING`"
                },
                {
                    "format": "date-time",
                    "name": "updatedAt",
                    "short": "Last update date and time of the post",
                    "type": "`$STRING`"
                },
                {
                    "format": "uri",
                    "name": "url",
                    "short": "URL to the full post on republicmag.io",
                    "type": "`$STRING`"
                }
            ],
            "id": {
                "field": "id",
                "name": "id"
            },
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
                            "segments": [
                                {
                                    "lit": "api"
                                },
                                {
                                    "lit": "posts"
                                },
                                {
                                    "lit": "recent"
                                }
                            ],
                            "select": {
                                "$action": "recent"
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "parts": [
                                "api",
                                "posts",
                                "recent"
                            ]
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": []
            }
        }
    };
}
const config = new Config();
exports.config = config;
//# sourceMappingURL=Config.js.map