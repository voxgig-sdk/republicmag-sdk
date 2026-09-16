# Republicmag SDK feature factory

require_relative 'feature/base_feature'
require_relative 'feature/ratelimit_feature'
require_relative 'feature/retry_feature'
require_relative 'feature/test_feature'
require_relative 'feature/timeout_feature'


module RepublicmagFeatures
  def self.make_feature(name)
    case name
    when "base"
      RepublicmagBaseFeature.new
    when "ratelimit"
      RepublicmagRatelimitFeature.new
    when "retry"
      RepublicmagRetryFeature.new
    when "test"
      RepublicmagTestFeature.new
    when "timeout"
      RepublicmagTimeoutFeature.new
    else
      RepublicmagBaseFeature.new
    end
  end
end
