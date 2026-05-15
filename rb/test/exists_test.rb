# Kitsu SDK exists test

require "minitest/autorun"
require_relative "../Kitsu_sdk"

class ExistsTest < Minitest::Test
  def test_create_test_sdk
    testsdk = KitsuSDK.test(nil, nil)
    assert !testsdk.nil?
  end
end
