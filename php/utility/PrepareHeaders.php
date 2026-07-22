<?php
declare(strict_types=1);

// Republicmag SDK utility: prepare_headers

class RepublicmagPrepareHeaders
{
    public static function call(RepublicmagContext $ctx): array
    {
        $options = $ctx->client->options_map();
        $headers = \Voxgig\Struct\Struct::getprop($options, 'headers');
        if (!$headers) {
            return [];
        }
        $out = \Voxgig\Struct\Struct::clone($headers);
        return is_array($out) ? $out : [];
    }
}
