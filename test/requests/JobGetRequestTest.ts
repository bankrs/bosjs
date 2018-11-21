import { suite, test } from 'mocha-typescript'
import { assert } from 'chai'

import ApiRequest from '../../lib/ApiRequest'
import JobGetRequest from '../../lib/requests/JobGetRequest'
import User from '../models/User'

@suite
class JobGetRequestTest {
  @test
  'expected endpoint' () {
    assert.strictEqual(this.request.endpoint, '/v1/jobs/7f64711d-ea9e-4aeb-80fb-bb9c14a1fc57')
  }

  @test
  'request method' () {
    assert.strictEqual(this.request.method, ApiRequest.Method.GET)
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
    return new JobGetRequest(new User(), '7f64711d-ea9e-4aeb-80fb-bb9c14a1fc57')
  }
}
