# Republicmag SDK utility: make_context
require_relative '../core/context'
module RepublicmagUtilities
  MakeContext = ->(ctxmap, basectx) {
    RepublicmagContext.new(ctxmap, basectx)
  }
end
