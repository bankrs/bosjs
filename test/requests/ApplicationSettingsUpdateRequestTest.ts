import { suite, test } from 'mocha-typescript'
import { assert } from 'chai'

import ApiRequest from '../../lib/ApiRequest'
import ApplicationSettingsUpdateRequest from '../../lib/requests/ApplicationSettingsUpdateRequest'
import User from '../models/User'

const data = {
  background_refresh: true
}

@suite
class ApplicationSettingsUpdateRequestTest {
  @test
  'expected endpoint' () {
    assert.strictEqual(this.request.endpoint, '/v1/developers/applications/123/settings')
  }

  @test
  'request method is POST' () {
    assert.strictEqual(this.request.method, ApiRequest.Method.PUT)
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
    assert.deepEqual(this.request.payload, data)
  }

  private get request () {
    return new ApplicationSettingsUpdateRequest(new User(), '123', data)
  }
}
