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
---@field imageUrl? string
---@field publishedAt string
---@field tags? table
---@field title string
---@field updatedAt? string
---@field url? string

---@class PostListMatch
---@field author? string
---@field category? string
---@field content? string
---@field excerpt? string
---@field id? string
---@field imageUrl? string
---@field publishedAt? string
---@field tags? table
---@field title? string
---@field updatedAt? string
---@field url? string

local M = {}

return M
