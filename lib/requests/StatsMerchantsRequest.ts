import StatsRequest from './StatsRequest'

/**
 * Requests data for the merchants chart.
 */
export default class StatsMerchantsRequest extends StatsRequest {
    /**
     * Data domain.
     */
    protected readonly domain = '/stats/merchants';
}
