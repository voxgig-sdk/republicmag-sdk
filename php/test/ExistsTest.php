<?php
declare(strict_types=1);

// Republicmag SDK exists test

require_once __DIR__ . '/../republicmag_sdk.php';

use PHPUnit\Framework\TestCase;

class ExistsTest extends TestCase
{
    public function test_create_test_sdk(): void
    {
        $testsdk = RepublicmagSDK::test(null, null);
        $this->assertNotNull($testsdk);
    }
}
