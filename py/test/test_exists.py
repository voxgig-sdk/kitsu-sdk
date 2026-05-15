# ProjectName SDK exists test

import pytest
from kitsu_sdk import KitsuSDK


class TestExists:

    def test_should_create_test_sdk(self):
        testsdk = KitsuSDK.test(None, None)
        assert testsdk is not None
