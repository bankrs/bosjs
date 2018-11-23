import { suite, test } from 'mocha-typescript'
import { assert } from 'chai'

import {Method} from '../../lib/ApiRequest'
import WebhookCreateRequest from '../../lib/requests/WebhookCreateRequest'
import User from '../models/User'

const data = {
  api_version: 1,
  url: 'https://site.com/webhooks',
  events: ['*']
}

@suite
class WebhookCreateRequestTest {
  @test
  'expected endpoint' () {
    assert.strictEqual(this.request.endpoint, '/v1/webhooks')
  }

  @test
  'request method' () {
    assert.strictEqual(this.request.method, Method.POST)
  }

  @test
  'expected success codes' () {
    assert.deepEqual(this.request.successCodes, [200, 201])
  }

  @test
  'expected error codes' () {
    assert.deepEqual(this.request.errorCodes, [400])
  }

  @test
  'expected payload' () {
    assert.deepEqual(this.request.payload, data)
  }

  private get request () {
    return new WebhookCreateRequest(new User(), data)
  }
}
