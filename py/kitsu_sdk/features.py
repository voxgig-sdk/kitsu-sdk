# Kitsu SDK feature factory

from kitsu_sdk.feature.base_feature import KitsuBaseFeature
from kitsu_sdk.feature.ratelimit_feature import KitsuRatelimitFeature
from kitsu_sdk.feature.retry_feature import KitsuRetryFeature
from kitsu_sdk.feature.test_feature import KitsuTestFeature
from kitsu_sdk.feature.timeout_feature import KitsuTimeoutFeature


_FEATURES = {
    "base": lambda: KitsuBaseFeature(),
    "ratelimit": lambda: KitsuRatelimitFeature(),
    "retry": lambda: KitsuRetryFeature(),
    "test": lambda: KitsuTestFeature(),
    "timeout": lambda: KitsuTimeoutFeature(),
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
