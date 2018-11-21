import { suite, test } from 'mocha-typescript'
import { assert } from 'chai'

import ApiRequest from '../../lib/ApiRequest'
import DeveloperPasswordResetRequest from '../../lib/requests/DeveloperPasswordResetRequest'

@suite
class DeveloperPasswordResetRequestTest {
  @test
  'expected endpoint' () {
    assert.strictEqual(new DeveloperPasswordResetRequest('', '').endpoint, '/v1/developers/reset_password')
  }

  @test
  'request method' () {
    assert.strictEqual(new DeveloperPasswordResetRequest('', '').method, ApiRequest.Method.POST)
  }

  @test
  'expected success codes' () {
    assert.deepEqual(new DeveloperPasswordResetRequest('', '').successCodes, [202])
  }

  @test
  'expected error codes' () {
    assert.deepEqual(new DeveloperPasswordResetRequest('', '').errorCodes, [400, 401])
  }

  @test
  'expected codes combine success and error codes' () {
    const request = new DeveloperPasswordResetRequest('', '')

    assert.deepEqual(request.expectedCodes, [202, 400, 401])
    assert.deepEqual(request.expectedCodes, request.successCodes.concat(request.errorCodes))
  }

  @test
  'expected payload' () {
    assert.deepEqual(new DeveloperPasswordResetRequest('password', 'token').payload, { password: 'password', token: 'token' })
  }
}
