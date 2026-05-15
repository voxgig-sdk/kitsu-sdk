<?php
declare(strict_types=1);

// Kitsu SDK utility: prepare_body

class KitsuPrepareBody
{
    public static function call(KitsuContext $ctx): mixed
    {
        if ($ctx->op->input === 'data') {
            return ($ctx->utility->transform_request)($ctx);
        }
        return null;
    }
}
