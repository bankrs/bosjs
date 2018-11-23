import { suite, test } from 'mocha-typescript'
import { assert } from 'chai'

import {Method} from '../../lib/ApiRequest'
import RepeatedTransactionDeleteRequest from '../../lib/requests/RepeatedTransactionDeleteRequest'
import User from '../models/User'

const data = [
  { id: 'login', value: '1234' }
]

@suite
class RepeatedTransactionDeleteRequestTest {
  @test
  'expected endpoint' () {
    assert.strictEqual(this.request.endpoint, '/v1/repeated_transactions/123')
  }

  @test
  'request method' () {
    assert.strictEqual(this.request.method, Method.DELETE)
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
    assert.deepEqual(this.request.payload, { challenge_answers: data })
  }

  private get request () {
    return new RepeatedTransactionDeleteRequest(new User(), 123, data)
  }
}
