import StatsRequest from './StatsRequest'

/**
 * Requests data for the users chart.
 */
export default class StatsUsersRequest extends StatsRequest {
    /**
     * Data domain.
     */
    protected readonly domain = '/stats/users';
}
