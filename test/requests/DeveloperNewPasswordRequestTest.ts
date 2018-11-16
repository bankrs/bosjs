import { suite, test } from 'mocha-typescript'
import { assert } from 'chai'

import ApiRequest from '../../lib/ApiRequest'
import DeveloperNewPasswordRequest from '../../lib/requests/DeveloperNewPasswordRequest'
import User from '../models/User'

@suite
class DeveloperNewPasswordRequestTest {
  @test
  'expected endpoint' () {
    assert.strictEqual(
      new DeveloperNewPasswordRequest(new User(), '', '').endpoint,
      '/v1/developers/password'
    )
  }

  @test
  'request method is POST' () {
    assert.strictEqual(
      new DeveloperNewPasswordRequest(new User(), '', '').method,
      ApiRequest.Method.POST
    )
  }

  @test
  'expected success codes' () {
    assert.deepEqual(new DeveloperNewPasswordRequest(new User(), '', '').successCodes, [200])
  }

  @test
  'expected error codes' () {
    assert.deepEqual(new DeveloperNewPasswordRequest(new User(), '', '').errorCodes, [400])
  }

  @test
  'expected codes combine success and error codes' () {
    const request = new DeveloperNewPasswordRequest(new User(), '', '')

    assert.deepEqual(request.expectedCodes, [200, 400])
    assert.deepEqual(request.expectedCodes, request.successCodes.concat(request.errorCodes))
  }

  @test
  'expected payload' () {
    assert.deepEqual(new DeveloperNewPasswordRequest(new User(), 'current', 'new').payload, {
      old_password: 'current',
      new_password: 'new'
    })
  }
}
