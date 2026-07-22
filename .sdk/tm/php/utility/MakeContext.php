<?php
declare(strict_types=1);

// Republicmag SDK utility: make_context

require_once __DIR__ . '/../core/Context.php';

class RepublicmagMakeContext
{
    public static function call(array $ctxmap, ?RepublicmagContext $basectx): RepublicmagContext
    {
        return new RepublicmagContext($ctxmap, $basectx);
    }
}
