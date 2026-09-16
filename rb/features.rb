# Kitsu SDK feature factory

require_relative 'feature/base_feature'
require_relative 'feature/ratelimit_feature'
require_relative 'feature/retry_feature'
require_relative 'feature/test_feature'
require_relative 'feature/timeout_feature'


module KitsuFeatures
  def self.make_feature(name)
    case name
    when "base"
      KitsuBaseFeature.new
    when "ratelimit"
      KitsuRatelimitFeature.new
    when "retry"
      KitsuRetryFeature.new
    when "test"
      KitsuTestFeature.new
    when "timeout"
      KitsuTimeoutFeature.new
    else
      KitsuBaseFeature.new
    end
  end
end
