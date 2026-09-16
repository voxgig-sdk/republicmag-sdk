# Republicmag SDK feature factory

from republicmag_sdk.feature.base_feature import RepublicmagBaseFeature
from republicmag_sdk.feature.ratelimit_feature import RepublicmagRatelimitFeature
from republicmag_sdk.feature.retry_feature import RepublicmagRetryFeature
from republicmag_sdk.feature.test_feature import RepublicmagTestFeature
from republicmag_sdk.feature.timeout_feature import RepublicmagTimeoutFeature


_FEATURES = {
    "base": lambda: RepublicmagBaseFeature(),
    "ratelimit": lambda: RepublicmagRatelimitFeature(),
    "retry": lambda: RepublicmagRetryFeature(),
    "test": lambda: RepublicmagTestFeature(),
    "timeout": lambda: RepublicmagTimeoutFeature(),
}


def _make_feature(name):
    factory = _FEATURES.get(name)
    if factory is not None:
        return factory()
    return _FEATURES["base"]()


# True when this SDK was generated with the named feature class - the
# constructor's tolerance for extend-carried features reads this (an
# active name with no generated class must not become a BaseFeature
# stray when an extend instance carries it).
def _has_feature(name):
    return name in _FEATURES
