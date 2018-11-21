import { suite, test } from 'mocha-typescript'
import { assert } from 'chai'

import ApiRequest from '../../lib/ApiRequest'
import DeveloperPasswordLostRequest from '../../lib/requests/DeveloperPasswordLostRequest'

@suite
class DeveloperPasswordLostRequestTest {
  @test
  'expected endpoint' () {
    assert.strictEqual(new DeveloperPasswordLostRequest('').endpoint, '/v1/developers/lost_password')
  }

  @test
  'request method' () {
    assert.strictEqual(new DeveloperPasswordLostRequest('').method, ApiRequest.Method.POST)
  }

  @test
  'expected success codes' () {
    assert.deepEqual(new DeveloperPasswordLostRequest('').successCodes, [204])
  }

  @test
  'expected error codes' () {
    assert.deepEqual(new DeveloperPasswordLostRequest('').errorCodes, [])
  }

  @test
  'expected codes combine success and error codes' () {
    const request = new DeveloperPasswordLostRequest('')

    assert.deepEqual(request.expectedCodes, [204])
    assert.deepEqual(request.expectedCodes, request.successCodes.concat(request.errorCodes))
  }

  @test
  'expected payload' () {
    assert.deepEqual(new DeveloperPasswordLostRequest('some@email.org').payload, { email: 'some@email.org' })
  }
}
