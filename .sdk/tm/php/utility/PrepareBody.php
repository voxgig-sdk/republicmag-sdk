<?php
declare(strict_types=1);

// Republicmag SDK utility: prepare_body

class RepublicmagPrepareBody
{
    public static function call(RepublicmagContext $ctx): mixed
    {
        if ($ctx->op->input === 'data') {
            return ($ctx->utility->transform_request)($ctx);
        }
        return null;
    }
}
