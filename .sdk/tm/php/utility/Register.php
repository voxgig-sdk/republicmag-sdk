<?php
declare(strict_types=1);

// Republicmag SDK utility registration

require_once __DIR__ . '/../core/UtilityType.php';
require_once __DIR__ . '/Clean.php';
require_once __DIR__ . '/Done.php';
require_once __DIR__ . '/MakeError.php';
require_once __DIR__ . '/FeatureAdd.php';
require_once __DIR__ . '/FeatureHook.php';
require_once __DIR__ . '/FeatureInit.php';
require_once __DIR__ . '/Fetcher.php';
require_once __DIR__ . '/MakeFetchDef.php';
require_once __DIR__ . '/MakeContext.php';
require_once __DIR__ . '/MakeOptions.php';
require_once __DIR__ . '/MakeRequest.php';
require_once __DIR__ . '/MakeResponse.php';
require_once __DIR__ . '/MakeResult.php';
require_once __DIR__ . '/MakePoint.php';
require_once __DIR__ . '/MakeSpec.php';
require_once __DIR__ . '/MakeUrl.php';
require_once __DIR__ . '/Param.php';
require_once __DIR__ . '/PrepareAuth.php';
require_once __DIR__ . '/PrepareBody.php';
require_once __DIR__ . '/PrepareHeaders.php';
require_once __DIR__ . '/PrepareMethod.php';
require_once __DIR__ . '/PrepareParams.php';
require_once __DIR__ . '/PreparePath.php';
require_once __DIR__ . '/PrepareQuery.php';
require_once __DIR__ . '/ResultBasic.php';
require_once __DIR__ . '/ResultBody.php';
require_once __DIR__ . '/ResultHeaders.php';
require_once __DIR__ . '/TransformRequest.php';
require_once __DIR__ . '/TransformResponse.php';

RepublicmagUtility::setRegistrar(function (RepublicmagUtility $u): void {
    $u->clean = [RepublicmagClean::class, 'call'];
    $u->done = [RepublicmagDone::class, 'call'];
    $u->make_error = [RepublicmagMakeError::class, 'call'];
    $u->feature_add = [RepublicmagFeatureAdd::class, 'call'];
    $u->feature_hook = [RepublicmagFeatureHook::class, 'call'];
    $u->feature_init = [RepublicmagFeatureInit::class, 'call'];
    $u->fetcher = [RepublicmagFetcher::class, 'call'];
    $u->make_fetch_def = [RepublicmagMakeFetchDef::class, 'call'];
    $u->make_context = [RepublicmagMakeContext::class, 'call'];
    $u->make_options = [RepublicmagMakeOptions::class, 'call'];
    $u->make_request = [RepublicmagMakeRequest::class, 'call'];
    $u->make_response = [RepublicmagMakeResponse::class, 'call'];
    $u->make_result = [RepublicmagMakeResult::class, 'call'];
    $u->make_point = [RepublicmagMakePoint::class, 'call'];
    $u->make_spec = [RepublicmagMakeSpec::class, 'call'];
    $u->make_url = [RepublicmagMakeUrl::class, 'call'];
    $u->param = [RepublicmagParam::class, 'call'];
    $u->prepare_auth = [RepublicmagPrepareAuth::class, 'call'];
    $u->prepare_body = [RepublicmagPrepareBody::class, 'call'];
    $u->prepare_headers = [RepublicmagPrepareHeaders::class, 'call'];
    $u->prepare_method = [RepublicmagPrepareMethod::class, 'call'];
    $u->prepare_params = [RepublicmagPrepareParams::class, 'call'];
    $u->prepare_path = [RepublicmagPreparePath::class, 'call'];
    $u->prepare_query = [RepublicmagPrepareQuery::class, 'call'];
    $u->result_basic = [RepublicmagResultBasic::class, 'call'];
    $u->result_body = [RepublicmagResultBody::class, 'call'];
    $u->result_headers = [RepublicmagResultHeaders::class, 'call'];
    $u->transform_request = [RepublicmagTransformRequest::class, 'call'];
    $u->transform_response = [RepublicmagTransformResponse::class, 'call'];
});
