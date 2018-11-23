import { suite, test } from 'mocha-typescript'
import { assert } from 'chai'

import {Method} from '../../lib/ApiRequest'
import DeveloperConfirmationRequest from '../../lib/requests/DeveloperConfirmationRequest'

@suite
class DeveloperConfirmationRequestTest {
  @test
  'expected endpoint' () {
    assert.strictEqual(this.request.endpoint, '/v1/developers/confirm')
  }

  @test
  'request method' () {
    assert.strictEqual(this.request.method, Method.POST)
  }

  @test
  'expected success codes' () {
    assert.deepEqual(this.request.successCodes, [200, 404])
  }

  @test
  'expected error codes' () {
    assert.deepEqual(this.request.errorCodes, [400])
  }

  @test
  'expected payload' () {
    assert.deepEqual(this.request.payload, { token: '123' })
  }

  private get request () {
    return new DeveloperConfirmationRequest('123')
  }
}
