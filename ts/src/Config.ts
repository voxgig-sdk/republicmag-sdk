
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


  main = {
    name: 'Republicmag',
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
          "type": "`$STRING`"
        },
        {
          "name": "category",
          "type": "`$STRING`"
        },
        {
          "name": "content",
          "type": "`$STRING`"
        },
        {
          "name": "excerpt",
          "type": "`$STRING`"
        },
        {
          "name": "id",
          "req": true,
          "type": "`$STRING`"
        },
        {
          "name": "imageUrl",
          "type": "`$STRING`"
        },
        {
          "name": "publishedAt",
          "req": true,
          "type": "`$STRING`"
        },
        {
          "name": "tags",
          "type": "`$ARRAY`"
        },
        {
          "name": "title",
          "req": true,
          "type": "`$STRING`"
        },
        {
          "name": "updatedAt",
          "type": "`$STRING`"
        },
        {
          "name": "url",
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

