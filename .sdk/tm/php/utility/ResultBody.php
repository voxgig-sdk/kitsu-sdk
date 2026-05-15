<?php
declare(strict_types=1);

// Kitsu SDK utility: result_body

class KitsuResultBody
{
    public static function call(KitsuContext $ctx): ?KitsuResult
    {
        $response = $ctx->response;
        $result = $ctx->result;
        if ($result && $response && $response->json_func && $response->body) {
            $result->body = ($response->json_func)();
        }
        return $result;
    }
}
