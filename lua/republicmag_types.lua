-- Typed models for the Republicmag SDK (LuaLS annotations).
--
-- GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
-- params (op.<name>.points[].args.params[]). Field/param types come from the
-- canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
-- @voxgig/apidef VALID_CANON). Annotations only — no runtime effect. Do not
-- edit by hand.

---@class Post
---@field author? string
---@field category? string
---@field content? string
---@field excerpt? string
---@field id string
---@field image_url? string
---@field published_at string
---@field tag? table
---@field title string
---@field updated_at? string
---@field url? string

---@class PostListMatch
---@field author? string
---@field category? string
---@field content? string
---@field excerpt? string
---@field id? string
---@field image_url? string
---@field published_at? string
---@field tag? table
---@field title? string
---@field updated_at? string
---@field url? string

local M = {}

return M
