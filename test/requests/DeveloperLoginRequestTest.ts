import { suite, test } from 'mocha-typescript'
import { assert } from 'chai'

import ApiRequest from '../../lib/ApiRequest'
import DeveloperLoginRequest from '../../lib/requests/DeveloperLoginRequest'

@suite
class DeveloperLoginRequestTest {
  @test
  'expected endpoint' () {
    assert.strictEqual(new DeveloperLoginRequest('', '').endpoint, '/v1/developers/login')
  }

  @test
  'request method is POST' () {
    assert.strictEqual(new DeveloperLoginRequest('', '').method, ApiRequest.Method.POST)
  }

  @test
  'expected success codes' () {
    assert.deepEqual(new DeveloperLoginRequest('', '').successCodes, [200])
  }

  @test
  'expected error codes' () {
    assert.deepEqual(new DeveloperLoginRequest('', '').errorCodes, [400, 401])
  }

  @test
  'expected codes combine success and error codes' () {
    const request = new DeveloperLoginRequest('', '')

    assert.deepEqual(request.expectedCodes, [200, 400, 401])
    assert.deepEqual(request.expectedCodes, request.successCodes.concat(request.errorCodes))
  }

  @test
  'expected payload' () {
    assert.deepEqual(
      new DeveloperLoginRequest('john@doe.net', 'password').payload,
      { email: 'john@doe.net', password: 'password' }
    )
  }
}
