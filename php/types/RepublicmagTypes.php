<?php
declare(strict_types=1);

// Typed models for the Republicmag SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
// params (op.<name>.points[].args.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.
//
// These are documentation-grade value objects (PHP 8 typed properties),
// registered on the composer classmap autoload. The SDK boundary exchanges
// assoc-arrays; these classes name the shapes for tooling and typed callers.

/** Post entity data model. */
class Post
{
    public ?string $author = null;
    public ?string $category = null;
    public ?string $content = null;
    public ?string $excerpt = null;
    public string $id;
    public ?string $imageUrl = null;
    public string $publishedAt;
    public ?array $tags = null;
    public string $title;
    public ?string $updatedAt = null;
    public ?string $url = null;
}

/** Request payload for Post#list. */
class PostListMatch
{
    public ?string $author = null;
    public ?string $category = null;
    public ?string $content = null;
    public ?string $excerpt = null;
    public ?string $id = null;
    public ?string $imageUrl = null;
    public ?string $publishedAt = null;
    public ?array $tags = null;
    public ?string $title = null;
    public ?string $updatedAt = null;
    public ?string $url = null;
}

