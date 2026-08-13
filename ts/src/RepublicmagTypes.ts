// Typed models for the Republicmag SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
// params (op.<name>.points[].args.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.

export interface Post {
  author?: string
  category?: string
  content?: string
  excerpt?: string
  id: string
  imageUrl?: string
  publishedAt: string
  tags?: any[]
  title: string
  updatedAt?: string
  url?: string
}

export interface PostListMatch {
  author?: string
  category?: string
  content?: string
  excerpt?: string
  id?: string
  imageUrl?: string
  publishedAt?: string
  tags?: any[]
  title?: string
  updatedAt?: string
  url?: string

  // Selects a custom action instead of the plain list:
  //   'recent'
  // The remaining keys are that action's own payload.
  $action?: string
  [action: string]: any
}

