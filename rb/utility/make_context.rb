# Kitsu SDK utility: make_context
require_relative '../core/context'
module KitsuUtilities
  MakeContext = ->(ctxmap, basectx) {
    KitsuContext.new(ctxmap, basectx)
  }
end
