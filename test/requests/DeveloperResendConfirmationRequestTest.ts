import { suite, test } from 'mocha-typescript'
import { assert } from 'chai'

import {Method} from '../../lib/ApiRequest'
import DeveloperResendConfirmationRequest from '../../lib/requests/DeveloperResendConfirmationRequest'
import User from '../models/User'

@suite
class DeveloperResendConfirmationRequestTest {
  @test
  'expected endpoint' () {
    assert.strictEqual(this.request.endpoint, '/v1/developers/send_confirmation')
  }

  @test
  'request method' () {
    assert.strictEqual(this.request.method, Method.POST)
  }

  @test
  'expected success codes' () {
    assert.deepEqual(this.request.successCodes, [202])
  }

  private get request () {
    return new DeveloperResendConfirmationRequest(new User())
  }
}
