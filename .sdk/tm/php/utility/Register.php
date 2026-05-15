<?php
declare(strict_types=1);

// Kitsu SDK utility registration

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

KitsuUtility::setRegistrar(function (KitsuUtility $u): void {
    $u->clean = [KitsuClean::class, 'call'];
    $u->done = [KitsuDone::class, 'call'];
    $u->make_error = [KitsuMakeError::class, 'call'];
    $u->feature_add = [KitsuFeatureAdd::class, 'call'];
    $u->feature_hook = [KitsuFeatureHook::class, 'call'];
    $u->feature_init = [KitsuFeatureInit::class, 'call'];
    $u->fetcher = [KitsuFetcher::class, 'call'];
    $u->make_fetch_def = [KitsuMakeFetchDef::class, 'call'];
    $u->make_context = [KitsuMakeContext::class, 'call'];
    $u->make_options = [KitsuMakeOptions::class, 'call'];
    $u->make_request = [KitsuMakeRequest::class, 'call'];
    $u->make_response = [KitsuMakeResponse::class, 'call'];
    $u->make_result = [KitsuMakeResult::class, 'call'];
    $u->make_point = [KitsuMakePoint::class, 'call'];
    $u->make_spec = [KitsuMakeSpec::class, 'call'];
    $u->make_url = [KitsuMakeUrl::class, 'call'];
    $u->param = [KitsuParam::class, 'call'];
    $u->prepare_auth = [KitsuPrepareAuth::class, 'call'];
    $u->prepare_body = [KitsuPrepareBody::class, 'call'];
    $u->prepare_headers = [KitsuPrepareHeaders::class, 'call'];
    $u->prepare_method = [KitsuPrepareMethod::class, 'call'];
    $u->prepare_params = [KitsuPrepareParams::class, 'call'];
    $u->prepare_path = [KitsuPreparePath::class, 'call'];
    $u->prepare_query = [KitsuPrepareQuery::class, 'call'];
    $u->result_basic = [KitsuResultBasic::class, 'call'];
    $u->result_body = [KitsuResultBody::class, 'call'];
    $u->result_headers = [KitsuResultHeaders::class, 'call'];
    $u->transform_request = [KitsuTransformRequest::class, 'call'];
    $u->transform_response = [KitsuTransformResponse::class, 'call'];
});
