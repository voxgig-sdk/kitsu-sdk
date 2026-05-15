<?php
declare(strict_types=1);

// Kitsu SDK utility: result_headers

class KitsuResultHeaders
{
    public static function call(KitsuContext $ctx): ?KitsuResult
    {
        $response = $ctx->response;
        $result = $ctx->result;
        if ($result) {
            if ($response && is_array($response->headers)) {
                $result->headers = $response->headers;
            } else {
                $result->headers = [];
            }
        }
        return $result;
    }
}
