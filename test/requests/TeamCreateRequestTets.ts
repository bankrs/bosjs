import { suite, test } from 'mocha-typescript'
import { assert } from 'chai'

import ApiRequest from '../../lib/ApiRequest'
import TeamCreateRequest from '../../lib/requests/TeamCreateRequest'
import User from '../models/User'

@suite
class TeamCreateRequestTest {
  @test
  'expected endpoint' () {
    assert.strictEqual(this.request.endpoint, '/v1/developers/team')
  }

  @test
  'request method' () {
    assert.strictEqual(this.request.method, ApiRequest.Method.POST)
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
    assert.deepEqual(this.request.payload, { name: 'new team' })
  }

  private get request () {
    return new TeamCreateRequest(new User(), 'new team')
  }
}
