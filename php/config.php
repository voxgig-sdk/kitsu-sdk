<?php
declare(strict_types=1);

// Kitsu SDK configuration

class KitsuConfig
{
    public static function make_config(): array
    {
        return [
            "main" => [
                "name" => "Kitsu",
            ],
            "feature" => [
                "test" => [
          'options' => [
            'active' => false,
          ],
        ],
            ],
            "options" => [
                "base" => "https://kitsu.io/api/edge",
                "auth" => [
                    "prefix" => "Bearer",
                ],
                "headers" => [
          'content-type' => 'application/json',
        ],
                "entity" => [
                    "anime" => [],
                ],
            ],
            "entity" => [
        'anime' => [
          'fields' => [],
          'name' => 'anime',
          'op' => [
            'load' => [
              'name' => 'load',
              'points' => [
                [
                  'args' => [
                    'query' => [
                      [
                        'example' => 'tokyo',
                        'kind' => 'query',
                        'name' => 'filter_text',
                        'orig' => 'filter_text',
                        'reqd' => true,
                        'type' => '`$STRING`',
                        'active' => true,
                      ],
                      [
                        'example' => 10,
                        'kind' => 'query',
                        'name' => 'page_limit',
                        'orig' => 'page_limit',
                        'reqd' => false,
                        'type' => '`$INTEGER`',
                        'active' => true,
                      ],
                      [
                        'example' => 0,
                        'kind' => 'query',
                        'name' => 'page_offset',
                        'orig' => 'page_offset',
                        'reqd' => false,
                        'type' => '`$INTEGER`',
                        'active' => true,
                      ],
                    ],
                  ],
                  'method' => 'GET',
                  'orig' => '/anime',
                  'parts' => [
                    'anime',
                  ],
                  'select' => [
                    'exist' => [
                      'filter_text',
                      'page_limit',
                      'page_offset',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'active' => true,
                  'index$' => 0,
                ],
              ],
              'input' => 'data',
              'key$' => 'load',
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
        return KitsuFeatures::make_feature($name);
    }
}
