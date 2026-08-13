# Republicmag SDK utility: make_context

from republicmag_sdk.core.context import RepublicmagContext


def make_context_util(ctxmap, basectx):
    return RepublicmagContext(ctxmap, basectx)
