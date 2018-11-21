import { suite, test } from 'mocha-typescript'
import { assert } from 'chai'

import ApiRequest from '../../lib/ApiRequest'
import WebhookEventReplayRequest from '../../lib/requests/WebhookEventReplayRequest'
import User from '../models/User'

@suite
class WebhookEventReplayRequestTest {
  @test
  'expected endpoint' () {
    assert.strictEqual(this.request.endpoint, '/v1/events/123/replay')
  }

  @test
  'request method' () {
    assert.strictEqual(this.request.method, ApiRequest.Method.POST)
  }

  @test
  'expected success codes' () {
    assert.deepEqual(this.request.successCodes, [200, 202])
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
    return new WebhookEventReplayRequest(new User(), '123')
  }
}
