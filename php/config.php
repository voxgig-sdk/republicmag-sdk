<?php
declare(strict_types=1);

// Republicmag SDK configuration

class RepublicmagConfig
{
    /** @var array<string,mixed>|null */
    private static ?array $shared_config = null;

    /**
     * Return the process-wide config, built once on first use. The SDK reads
     * the config on every request and never writes to it, so one instance is
     * shared by every client rather than rebuilt per client.
     *
     * PHP arrays are copy-on-write, so callers that do mutate the result get
     * their own copy and cannot disturb the shared one.
     */
    public static function shared_config(): array
    {
        if (self::$shared_config === null) {
            self::$shared_config = self::make_config();
        }
        return self::$shared_config;
    }

    /**
     * Build a fresh, fully materialised config array. Every call rebuilds the
     * whole structure, so prefer shared_config unless you need a private copy.
     */
    public static function make_config(): array
    {
        return [
            "main" => [
                "name" => "Republicmag",
                "slug" => "republicmag",
                "version" => "0.0.1",
                "target" => "php",
            ],
            "feature" => [
                "test" => [
          'options' => [
            'active' => false,
          ],
          'transport' => 'base',
        ],
            ],
            "options" => [
                "base" => "https://republicmag.io",
                "headers" => [
          'content-type' => 'application/json',
        ],
                "entity" => [
                    "post" => [],
                ],
            ],
            "entity" => [
        'post' => [
          'fields' => [
            [
              'name' => 'author',
              'short' => 'Author of the post',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'category',
              'short' => 'Category of the post (politics, economics, society, culture, etc.)',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'content',
              'short' => 'Full content of the post',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'excerpt',
              'short' => 'Short excerpt or summary of the post',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'id',
              'req' => true,
              'short' => 'Unique identifier for the post',
              'type' => '`$STRING`',
            ],
            [
              'format' => 'uri',
              'name' => 'imageUrl',
              'short' => 'URL to the post\'s featured image',
              'type' => '`$STRING`',
            ],
            [
              'format' => 'date-time',
              'name' => 'publishedAt',
              'req' => true,
              'short' => 'Publication date and time of the post',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'tags',
              'short' => 'Tags associated with the post',
              'type' => '`$ARRAY`',
            ],
            [
              'name' => 'title',
              'req' => true,
              'short' => 'Title of the post',
              'type' => '`$STRING`',
            ],
            [
              'format' => 'date-time',
              'name' => 'updatedAt',
              'short' => 'Last update date and time of the post',
              'type' => '`$STRING`',
            ],
            [
              'format' => 'uri',
              'name' => 'url',
              'short' => 'URL to the full post on republicmag.io',
              'type' => '`$STRING`',
            ],
          ],
          'id' => [
            'field' => 'id',
            'name' => 'id',
          ],
          'name' => 'post',
          'op' => [
            'list' => [
              'input' => 'data',
              'name' => 'list',
              'points' => [
                [
                  'args' => [],
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/api/posts/recent',
                  'segments' => [
                    [
                      'lit' => 'api',
                    ],
                    [
                      'lit' => 'posts',
                    ],
                    [
                      'lit' => 'recent',
                    ],
                  ],
                  'select' => [
                    '$action' => 'recent',
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'parts' => [
                    'api',
                    'posts',
                    'recent',
                  ],
                ],
              ],
            ],
          ],
          'relations' => [
            'ancestors' => [],
          ],
        ],
      ],
        ];
    }


    public static function make_feature(string $name)
    {
        require_once __DIR__ . '/features.php';
        return RepublicmagFeatures::make_feature($name);
    }
}
