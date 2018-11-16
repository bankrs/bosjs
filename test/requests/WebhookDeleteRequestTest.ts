import { suite, test } from 'mocha-typescript'
import { assert } from 'chai'

import ApiRequest from '../../lib/ApiRequest'
import WebhookDeleteRequest from '../../lib/requests/WebhookDeleteRequest'
import User from '../models/User'

@suite
class WebhookDeleteRequestTest {
  @test
  'expected endpoint' () {
    assert.strictEqual(this.request.endpoint, '/v1/webhooks/123')
  }

  @test
  'request method is DELETE' () {
    assert.strictEqual(this.request.method, ApiRequest.Method.DELETE)
  }

  @test
  'expected success codes' () {
    assert.deepEqual(this.request.successCodes, [200])
  }

  @test
  'expected error codes' () {
    assert.deepEqual(this.request.errorCodes, [400])
  }

  @test
  'expected payload' () {
    assert.deepEqual(this.request.payload, {})
  }

  private get request () {
    return new WebhookDeleteRequest(new User(), '123')
  }
}
