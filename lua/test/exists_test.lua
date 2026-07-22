-- Republicmag SDK exists test

local sdk = require("republicmag_sdk")

describe("RepublicmagSDK", function()
  it("should create test SDK", function()
    local testsdk = sdk.test(nil, nil)
    assert.is_not_nil(testsdk)
  end)
end)
