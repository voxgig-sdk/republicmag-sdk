# Republicmag SDK feature factory

require_relative 'feature/base_feature'
require_relative 'feature/test_feature'


module RepublicmagFeatures
  def self.make_feature(name)
    case name
    when "base"
      RepublicmagBaseFeature.new
    when "test"
      RepublicmagTestFeature.new
    else
      RepublicmagBaseFeature.new
    end
  end
end
