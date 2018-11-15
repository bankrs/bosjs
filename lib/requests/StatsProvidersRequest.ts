import StatsRequest from './StatsRequest'

/**
 * Requests data for the banks chart.
 */
export default class StatsProvidersRequest extends StatsRequest {
    /**
     * Data domain.
     */
    protected readonly domain = '/stats/providers';
}
