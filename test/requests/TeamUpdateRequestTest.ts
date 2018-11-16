import { suite, test } from 'mocha-typescript'
import { assert } from 'chai'

import ApiRequest from '../../lib/ApiRequest'
import TeamUpdateRequest from '../../lib/requests/TeamUpdateRequest'
import User from '../models/User'

@suite
class TeamUpdateRequestTest {
  @test
  'expected endpoint' () {
    assert.strictEqual(this.request.endpoint, '/v1/developers/team')
  }

  @test
  'request method is POST' () {
    assert.strictEqual(this.request.method, ApiRequest.Method.PUT)
  }

  @test
  'expected success codes' () {
    assert.deepEqual(this.request.successCodes, [200, 204])
  }

  @test
  'expected error codes' () {
    assert.deepEqual(this.request.errorCodes, [400, 404])
  }

  @test
  'expected payload' () {
    assert.deepEqual(this.request.payload, { name: 'new name' })
  }

  private get request () {
    return new TeamUpdateRequest(new User(), 'new name')
  }
}
