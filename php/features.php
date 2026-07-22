<?php
declare(strict_types=1);

// Republicmag SDK feature factory

require_once __DIR__ . '/feature/BaseFeature.php';
require_once __DIR__ . '/feature/TestFeature.php';


class RepublicmagFeatures
{
    public static function make_feature(string $name)
    {
        switch ($name) {
            case "base":
                return new RepublicmagBaseFeature();
            case "test":
                return new RepublicmagTestFeature();
            default:
                return new RepublicmagBaseFeature();
        }
    }
}
