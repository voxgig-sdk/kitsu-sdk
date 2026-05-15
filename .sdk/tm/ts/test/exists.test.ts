
import { test, describe } from 'node:test'
import { equal } from 'node:assert'


import { KitsuSDK } from '..'


describe('exists', async () => {

  test('test-mode', async () => {
    const testsdk = await KitsuSDK.test()
    equal(null !== testsdk, true)
  })

})
