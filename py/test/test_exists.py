# ProjectName SDK exists test

import pytest
from republicmag_sdk import RepublicmagSDK


class TestExists:

    def test_should_create_test_sdk(self):
        testsdk = RepublicmagSDK.test(None, None)
        assert testsdk is not None
