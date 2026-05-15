<?php
declare(strict_types=1);

// Kitsu SDK utility: make_context

require_once __DIR__ . '/../core/Context.php';

class KitsuMakeContext
{
    public static function call(array $ctxmap, ?KitsuContext $basectx): KitsuContext
    {
        return new KitsuContext($ctxmap, $basectx);
    }
}
