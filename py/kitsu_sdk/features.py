# Kitsu SDK feature factory

from kitsu_sdk.feature.base_feature import KitsuBaseFeature
from kitsu_sdk.feature.test_feature import KitsuTestFeature


def _make_feature(name):
    features = {
        "base": lambda: KitsuBaseFeature(),
        "test": lambda: KitsuTestFeature(),
    }
    factory = features.get(name)
    if factory is not None:
        return factory()
    return features["base"]()
