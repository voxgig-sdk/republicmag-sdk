<?php
declare(strict_types=1);

// Republicmag SDK utility: result_headers

class RepublicmagResultHeaders
{
    public static function call(RepublicmagContext $ctx): ?RepublicmagResult
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
