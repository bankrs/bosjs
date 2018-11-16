import { suite, test } from 'mocha-typescript'
import { assert } from 'chai'

import ApiRequest from '../../lib/ApiRequest'
import ResendConfirmationRequest from '../../lib/requests/ResendConfirmationRequest'
import User from '../models/User'

@suite
class ResendConfirmationRequestTest {
  @test
  'expected endpoint' () {
    assert.strictEqual(this.request.endpoint, '/v1/developers/send_confirmation')
  }

  @test
  'request method is POST' () {
    assert.strictEqual(this.request.method, ApiRequest.Method.POST)
  }

  @test
  'expected success codes' () {
    assert.deepEqual(this.request.successCodes, [202])
  }

  private get request () {
    return new ResendConfirmationRequest(new User())
  }
}
