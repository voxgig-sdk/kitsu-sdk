# Kitsu SDK utility: feature_add
module KitsuUtilities
  FeatureAdd = ->(ctx, f) {
    ctx.client.features << f
  }
end
