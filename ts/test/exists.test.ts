
import { test, describe } from 'node:test'
import { equal } from 'node:assert'


import { RepublicmagSDK } from '..'


describe('exists', async () => {

  test('test-mode', async () => {
    const testsdk = await RepublicmagSDK.test()
    equal(null !== testsdk, true)
  })

})
