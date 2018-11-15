import StatsRequest from './StatsRequest'

/**
 * Requests data for the API usage chart.
 */
export default class ApiUsageChartDataRequest extends StatsRequest {
    /**
     * Data domain.
     */
    protected readonly domain = '/stats/requests';
}
