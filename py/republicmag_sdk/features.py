# Republicmag SDK feature factory

from republicmag_sdk.feature.base_feature import RepublicmagBaseFeature
from republicmag_sdk.feature.test_feature import RepublicmagTestFeature


def _make_feature(name):
    features = {
        "base": lambda: RepublicmagBaseFeature(),
        "test": lambda: RepublicmagTestFeature(),
    }
    factory = features.get(name)
    if factory is not None:
        return factory()
    return features["base"]()
