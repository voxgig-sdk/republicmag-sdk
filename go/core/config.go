package core

import (
	"sync"
)

// MakeConfig builds a fresh, fully materialised config map. Every call
// rebuilds the whole structure, so prefer SharedConfig unless you need a
// private copy you intend to mutate.
func MakeConfig() map[string]any {
	return map[string]any{
		"main": map[string]any{
			"name": "Republicmag",
			"slug": "republicmag",
			"version": "0.0.1",
			"target": "go",
		},
		"feature": map[string]any{
			"test": map[string]any{
				"options": map[string]any{
					"active": false,
				},
				"transport": "base",
			},
		},
		"options": map[string]any{
			"base": "https://republicmag.io",
			"headers": map[string]any{
				"content-type": "application/json",
			},
			"entity": map[string]any{
				"post": map[string]any{},
			},
		},
		"entity": map[string]any{
			"post": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "author",
						"short": "Author of the post",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "category",
						"short": "Category of the post (politics, economics, society, culture, etc.)",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "content",
						"short": "Full content of the post",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "excerpt",
						"short": "Short excerpt or summary of the post",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "id",
						"req": true,
						"short": "Unique identifier for the post",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "imageUrl",
						"short": "URL to the post's featured image",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "publishedAt",
						"req": true,
						"short": "Publication date and time of the post",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "tags",
						"short": "Tags associated with the post",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "title",
						"req": true,
						"short": "Title of the post",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "updatedAt",
						"short": "Last update date and time of the post",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "url",
						"short": "URL to the full post on republicmag.io",
						"type": "`$STRING`",
					},
				},
				"name": "post",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"args": map[string]any{},
								"kind": "http",
								"method": "GET",
								"orig": "/api/posts/recent",
								"parts": []any{
									"api",
									"posts",
									"recent",
								},
								"select": map[string]any{
									"$action": "recent",
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
		},
	}
}

var (
	sharedConfigOnce sync.Once
	sharedConfigVal  map[string]any
)

// SharedConfig returns the process-wide config, built once on first use.
// The SDK reads the config on every request and never writes to it, so one
// instance is shared by every client rather than rebuilt per client.
//
// The returned map is shared: treat it as read-only. Callers that need to
// mutate should use MakeConfig, which always returns a fresh copy.
func SharedConfig() map[string]any {
	sharedConfigOnce.Do(func() {
		sharedConfigVal = MakeConfig()
	})
	return sharedConfigVal
}

func makeFeature(name string) Feature {
	switch name {
	case "test":
		if NewTestFeatureFunc != nil {
			return NewTestFeatureFunc()
		}
	default:
		if NewBaseFeatureFunc != nil {
			return NewBaseFeatureFunc()
		}
	}
	return nil
}
