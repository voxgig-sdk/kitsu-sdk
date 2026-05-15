<?php
declare(strict_types=1);

// Kitsu SDK feature factory

require_once __DIR__ . '/feature/BaseFeature.php';
require_once __DIR__ . '/feature/TestFeature.php';


class KitsuFeatures
{
    public static function make_feature(string $name)
    {
        switch ($name) {
            case "base":
                return new KitsuBaseFeature();
            case "test":
                return new KitsuTestFeature();
            default:
                return new KitsuBaseFeature();
        }
    }
}
