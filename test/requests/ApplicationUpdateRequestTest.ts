import { suite, test } from 'mocha-typescript'
import { assert } from 'chai'

import ApiRequest from '../../lib/ApiRequest'
import ApplicationUpdateRequest from '../../lib/requests/ApplicationUpdateRequest'
import User from '../models/User'

const data = {
  label: 'new app'
}

@suite
class ApplicationUpdateRequestTest {
  @test
  'expected endpoint' () {
    assert.strictEqual(this.request.endpoint, '/v1/developers/applications/123')
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
  'expected payload' () {
    assert.deepEqual(this.request.payload, data)
  }

  private get request () {
    return new ApplicationUpdateRequest(new User(), '123', data)
  }
}
