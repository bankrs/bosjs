import { suite, test } from 'mocha-typescript'
import { assert } from 'chai'

import {Method} from '../../lib/ApiRequest'
import TransferCancelRequest from '../../lib/requests/TransferCancelRequest'
import User from '../models/User'

const data = { version: 1, type: 'regular' }

@suite
class TransferCancelRequestTest {
  @test
  'expected endpoint' () {
    assert.strictEqual(this.request.endpoint, '/v1/transfers/123/cancel')
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
    return new TransferCancelRequest(new User(), 123, data)
  }
}
