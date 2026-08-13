# frozen_string_literal: true

# Typed models for the Republicmag SDK.
#
# GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
# params (op.<name>.points[].args.params[]). Member types come from the
# canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
# @voxgig/apidef VALID_CANON). Ruby types are unenforced; these YARD
# annotations document the shapes. Do not edit by hand.

# Post entity data model.
#
# @!attribute [rw] author
#   @return [String, nil]
#
# @!attribute [rw] category
#   @return [String, nil]
#
# @!attribute [rw] content
#   @return [String, nil]
#
# @!attribute [rw] excerpt
#   @return [String, nil]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] imageUrl
#   @return [String, nil]
#
# @!attribute [rw] publishedAt
#   @return [String]
#
# @!attribute [rw] tags
#   @return [Array, nil]
#
# @!attribute [rw] title
#   @return [String]
#
# @!attribute [rw] updatedAt
#   @return [String, nil]
#
# @!attribute [rw] url
#   @return [String, nil]
Post = Struct.new(
  :author,
  :category,
  :content,
  :excerpt,
  :id,
  :imageUrl,
  :publishedAt,
  :tags,
  :title,
  :updatedAt,
  :url,
  keyword_init: true
)

# Request payload for Post#list.
#
# @!attribute [rw] author
#   @return [String, nil]
#
# @!attribute [rw] category
#   @return [String, nil]
#
# @!attribute [rw] content
#   @return [String, nil]
#
# @!attribute [rw] excerpt
#   @return [String, nil]
#
# @!attribute [rw] id
#   @return [String, nil]
#
# @!attribute [rw] imageUrl
#   @return [String, nil]
#
# @!attribute [rw] publishedAt
#   @return [String, nil]
#
# @!attribute [rw] tags
#   @return [Array, nil]
#
# @!attribute [rw] title
#   @return [String, nil]
#
# @!attribute [rw] updatedAt
#   @return [String, nil]
#
# @!attribute [rw] url
#   @return [String, nil]
PostListMatch = Struct.new(
  :author,
  :category,
  :content,
  :excerpt,
  :id,
  :imageUrl,
  :publishedAt,
  :tags,
  :title,
  :updatedAt,
  :url,
  keyword_init: true
)

