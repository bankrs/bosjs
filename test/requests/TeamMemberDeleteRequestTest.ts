import { suite, test } from 'mocha-typescript'
import { assert } from 'chai'

import ApiRequest from '../../lib/ApiRequest'
import TeamMemberDeleteRequest from '../../lib/requests/TeamMemberDeleteRequest'
import User from '../models/User'

@suite
class TeamMemberDeleteRequestTest {
  @test
  'expected endpoint' () {
    assert.strictEqual(this.request.endpoint, '/v1/developers/team_members/id-1')
  }

  @test
  'request method' () {
    assert.strictEqual(this.request.method, ApiRequest.Method.DELETE)
  }

  @test
  'expected success codes' () {
    assert.deepEqual(this.request.successCodes, [200, 204])
  }

  @test
  'expected error codes' () {
    assert.deepEqual(this.request.errorCodes, [400, 401, 404])
  }

  @test
  'expected payload' () {
    assert.deepEqual(this.request.payload, { password: '123' })
  }

  private get request () {
    return new TeamMemberDeleteRequest(new User(), 'id-1', { password: '123' })
  }
}
