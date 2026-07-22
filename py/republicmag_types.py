# Typed models for the Republicmag SDK.
#
# GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
# params (op.<name>.points[].args.params[]). Field/param types come from the
# canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
# @voxgig/apidef VALID_CANON). Do not edit by hand.
#
# These are TypedDicts, not dataclasses: the SDK ops return/accept plain dicts
# at runtime, and a TypedDict IS a dict shape, so the types match the runtime.
# Optional (req:false) keys are modelled as TypedDict key-optionality
# (total=False), split into a required base + total=False subclass when a type
# has both required and optional keys.

from __future__ import annotations

from typing import TypedDict, Any


class PostRequired(TypedDict):
    id: str
    published_at: str
    title: str


class Post(PostRequired, total=False):
    author: str
    category: str
    content: str
    excerpt: str
    image_url: str
    tag: list
    updated_at: str
    url: str


class PostListMatch(TypedDict, total=False):
    author: str
    category: str
    content: str
    excerpt: str
    id: str
    image_url: str
    published_at: str
    tag: list
    title: str
    updated_at: str
    url: str
