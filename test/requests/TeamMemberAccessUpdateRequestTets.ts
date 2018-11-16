import { suite, test } from 'mocha-typescript'
import { assert } from 'chai'

import ApiRequest from '../../lib/ApiRequest'
import TeamMemberAccessUpdateRequest from '../../lib/requests/TeamMemberAccessUpdateRequest'
import User from '../models/User'

const data = [{ resource_name: 'stats', access_level: 3 }]

@suite
class TeamMemberAccessUpdateRequestTest {
  @test
  'expected endpoint' () {
    assert.strictEqual(this.request.endpoint, '/v1/developers/team_members/123/accesses')
  }

  @test
  'request method is PUT' () {
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
    assert.deepEqual(this.request.payload, { accesses: data })
  }

  private get request () {
    return new TeamMemberAccessUpdateRequest(new User(), '123', data)
  }
}
