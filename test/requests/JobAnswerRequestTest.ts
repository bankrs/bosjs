import { suite, test } from 'mocha-typescript'
import { assert } from 'chai'

import ApiRequest from '../../lib/ApiRequest'
import JobAnswerRequest from '../../lib/requests/JobAnswerRequest'
import User from '../models/User'

const currDate = new Date()
const data = {
  id: 'login',
  value: 'john_doe_hsbc',
  store: true,
  validUntil: currDate
}

@suite
class JobAnswerRequestTest {
  @test
  'expected endpoint' () {
    assert.strictEqual(this.request.endpoint, '/v1/jobs/7f64711d-ea9e-4aeb-80fb-bb9c14a1fc57')
  }

  @test
  'request method' () {
    assert.strictEqual(this.request.method, ApiRequest.Method.PUT)
  }

  @test
  'expected success codes' () {
    assert.deepEqual(this.request.successCodes, [200, 204])
  }

  @test
  'expected error codes' () {
    assert.deepEqual(this.request.errorCodes, [400])
  }

  @test
  'expected payload with all data' () {
    const exp = {
      id: 'login',
      value: 'john_doe_hsbc',
      store: true,
      valid_until: currDate
    }
    assert.deepEqual(this.request.payload, exp)
  }

  @test
  'expected payload with optional data' () {
    const data = {
      id: 'login',
      value: 'john_doe_hsbc'
    }

    const exp = {
      id: 'login',
      value: 'john_doe_hsbc'
    }

    const r = new JobAnswerRequest(new User(), '7f64711d-ea9e-4aeb-80fb-bb9c14a1fc57', data)
    assert.deepEqual(r.payload, exp)
  }

  private get request () {
    return new JobAnswerRequest(new User(), '7f64711d-ea9e-4aeb-80fb-bb9c14a1fc57', data)
  }
}
