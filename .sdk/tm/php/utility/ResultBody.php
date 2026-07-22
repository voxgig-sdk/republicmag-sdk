<?php
declare(strict_types=1);

// Republicmag SDK utility: result_body

class RepublicmagResultBody
{
    public static function call(RepublicmagContext $ctx): ?RepublicmagResult
    {
        $response = $ctx->response;
        $result = $ctx->result;
        if ($result && $response && $response->json_func && $response->body) {
            $result->body = ($response->json_func)();
        }
        return $result;
    }
}
