# Kitsu SDK feature factory

require_relative 'feature/base_feature'
require_relative 'feature/test_feature'


module KitsuFeatures
  def self.make_feature(name)
    case name
    when "base"
      KitsuBaseFeature.new
    when "test"
      KitsuTestFeature.new
    else
      KitsuBaseFeature.new
    end
  end
end
