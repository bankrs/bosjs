import { suite, test } from 'mocha-typescript'
import { assert } from 'chai'

import {Method} from '../../lib/ApiRequest'
import TransferGetRequest from '../../lib/requests/TransferGetRequest'
import User from '../models/User'

@suite
class TransferGetRequestTest {
  @test
  'expected endpoint' () {
    assert.strictEqual(this.request.endpoint, '/v1/transfers/123')
  }

  @test
  'request method' () {
    assert.strictEqual(this.request.method, Method.GET)
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
    assert.isEmpty(this.request.payload)
  }

  private get request () {
    return new TransferGetRequest(new User(), 123)
  }
}
