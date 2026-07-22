# Republicmag SDK utility registration
require_relative '../core/utility_type'
require_relative 'clean'
require_relative 'done'
require_relative 'make_error'
require_relative 'feature_add'
require_relative 'feature_hook'
require_relative 'feature_init'
require_relative 'fetcher'
require_relative 'make_fetch_def'
require_relative 'make_context'
require_relative 'make_options'
require_relative 'make_request'
require_relative 'make_response'
require_relative 'make_result'
require_relative 'make_point'
require_relative 'make_spec'
require_relative 'make_url'
require_relative 'param'
require_relative 'prepare_auth'
require_relative 'prepare_body'
require_relative 'prepare_headers'
require_relative 'prepare_method'
require_relative 'prepare_params'
require_relative 'prepare_path'
require_relative 'prepare_query'
require_relative 'result_basic'
require_relative 'result_body'
require_relative 'result_headers'
require_relative 'transform_request'
require_relative 'transform_response'

RepublicmagUtility.registrar = ->(u) {
  u.clean = RepublicmagUtilities::Clean
  u.done = RepublicmagUtilities::Done
  u.make_error = RepublicmagUtilities::MakeError
  u.feature_add = RepublicmagUtilities::FeatureAdd
  u.feature_hook = RepublicmagUtilities::FeatureHook
  u.feature_init = RepublicmagUtilities::FeatureInit
  u.fetcher = RepublicmagUtilities::Fetcher
  u.make_fetch_def = RepublicmagUtilities::MakeFetchDef
  u.make_context = RepublicmagUtilities::MakeContext
  u.make_options = RepublicmagUtilities::MakeOptions
  u.make_request = RepublicmagUtilities::MakeRequest
  u.make_response = RepublicmagUtilities::MakeResponse
  u.make_result = RepublicmagUtilities::MakeResult
  u.make_point = RepublicmagUtilities::MakePoint
  u.make_spec = RepublicmagUtilities::MakeSpec
  u.make_url = RepublicmagUtilities::MakeUrl
  u.param = RepublicmagUtilities::Param
  u.prepare_auth = RepublicmagUtilities::PrepareAuth
  u.prepare_body = RepublicmagUtilities::PrepareBody
  u.prepare_headers = RepublicmagUtilities::PrepareHeaders
  u.prepare_method = RepublicmagUtilities::PrepareMethod
  u.prepare_params = RepublicmagUtilities::PrepareParams
  u.prepare_path = RepublicmagUtilities::PreparePath
  u.prepare_query = RepublicmagUtilities::PrepareQuery
  u.result_basic = RepublicmagUtilities::ResultBasic
  u.result_body = RepublicmagUtilities::ResultBody
  u.result_headers = RepublicmagUtilities::ResultHeaders
  u.transform_request = RepublicmagUtilities::TransformRequest
  u.transform_response = RepublicmagUtilities::TransformResponse
}
