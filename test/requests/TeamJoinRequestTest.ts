import { suite, test } from 'mocha-typescript'
import { assert } from 'chai'

import ApiRequest from '../../lib/ApiRequest'
import TeamJoinRequest from '../../lib/requests/TeamJoinRequest'
import User from '../models/User'

@suite
class TeamJoinRequestTest {
  @test
  'expected endpoint' () {
    assert.strictEqual(this.request.endpoint, '/v1/developers/team/join')
  }

  @test
  'request method' () {
    assert.strictEqual(this.request.method, ApiRequest.Method.POST)
  }

  @test
  'expected success codes' () {
    assert.deepEqual(this.request.successCodes, [200, 404, 409])
  }

  @test
  'expected error codes' () {
    assert.deepEqual(this.request.errorCodes, [400])
  }

  @test
  'expected payload' () {
    assert.deepEqual(this.request.payload, { token: 'token' })
  }

  @test
  'expected user' () {
    assert.notEqual(this.requestWithUser.user, null)
  }

  private get request () {
    return new TeamJoinRequest('token')
  }

  private get requestWithUser () {
    return new TeamJoinRequest('token', new User())
  }
}
