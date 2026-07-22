-- Republicmag SDK error

local RepublicmagError = {}
RepublicmagError.__index = RepublicmagError


function RepublicmagError.new(code, msg, ctx)
  local self = setmetatable({}, RepublicmagError)
  self.is_sdk_error = true
  self.sdk = "Republicmag"
  self.code = code or ""
  self.msg = msg or ""
  self.ctx = ctx
  self.result = nil
  self.spec = nil
  return self
end


function RepublicmagError:error()
  return self.msg
end


function RepublicmagError:__tostring()
  return self.msg
end


return RepublicmagError
