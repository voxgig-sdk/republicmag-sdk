
import { BaseFeature } from './feature/base/BaseFeature'
import { TestFeature } from './feature/test/TestFeature'



const FEATURE_CLASS: Record<string, typeof BaseFeature> = {
   test: TestFeature,

}


class Config {

  makeFeature(this: any, fn: string) {
    const fc = FEATURE_CLASS[fn]
    const fi = new fc()
    // TODO: errors etc
    return fi
  }

  // False for a feature added at runtime via options.extend (station's
  // adopt path) - the constructor uses this to skip makeFeature for names
  // no generated class backs.
  hasFeature(this: any, fn: string) {
    return null != FEATURE_CLASS[fn]
  }


  main = {
    name: 'Republicmag',
        slug: "republicmag",
    version: "0.0.1",
    target: "ts",

  }


  feature = {
     test:     {
      "options": {
        "active": false
      }
    },

  }


  options = {
    base: "https://republicmag.io",

    headers: {
      "content-type": "application/json"
    },

    entity: {
      
      post: {
      },

    }
  }


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
          "name": "imageUrl",
          "short": "URL to the post's featured image",
          "type": "`$STRING`"
        },
        {
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
          "name": "updatedAt",
          "short": "Last update date and time of the post",
          "type": "`$STRING`"
        },
        {
          "name": "url",
          "short": "URL to the full post on republicmag.io",
          "type": "`$STRING`"
        }
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
                "recent"
              ],
              "select": {
                "$action": "recent"
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              }
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    }
  }
}


const config = new Config()

export {
  config
}

