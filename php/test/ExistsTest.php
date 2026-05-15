<?php
declare(strict_types=1);

// Kitsu SDK exists test

require_once __DIR__ . '/../kitsu_sdk.php';

use PHPUnit\Framework\TestCase;

class ExistsTest extends TestCase
{
    public function test_create_test_sdk(): void
    {
        $testsdk = KitsuSDK::test(null, null);
        $this->assertNotNull($testsdk);
    }
}
