import StatsRequest from './StatsRequest'

/**
 * Requests data for the MAU chart.
 */
export default class StatsMAURequest extends StatsRequest {
    /**
     * Data domain.
     */
    protected readonly domain = '/stats/mau';
}
