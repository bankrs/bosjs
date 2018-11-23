import { suite, test } from 'mocha-typescript'
import { assert } from 'chai'

import {Method} from '../../lib/ApiRequest'
import TransferProcessRequest from '../../lib/requests/TransferProcessRequest'
import User from '../models/User'

const data = {
  intent: 'buy',
  version: 1,
  confirm: true,
  type: 'recurring',
  challengeAnswers: [{ id: 'login', value: '1234' }]
}

@suite
class TransferProcessRequestTest {
  @test
  'expected endpoint' () {
    assert.strictEqual(this.request.endpoint, '/v1/transfers/123')
  }

  @test
  'request method' () {
    assert.strictEqual(this.request.method, Method.POST)
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
    const exp = {
      intent: 'buy',
      version: 1,
      confirm: true,
      type: 'recurring',
      challenge_answers: [{ id: 'login', value: '1234' }]
    }

    assert.deepEqual(this.request.payload, exp)
  }

  private get request () {
    return new TransferProcessRequest(new User(), 123, data)
  }
}
