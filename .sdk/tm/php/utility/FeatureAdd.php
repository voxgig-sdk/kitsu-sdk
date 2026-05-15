<?php
declare(strict_types=1);

// Kitsu SDK utility: feature_add

class KitsuFeatureAdd
{
    public static function call(KitsuContext $ctx, mixed $f): void
    {
        $ctx->client->features[] = $f;
    }
}
