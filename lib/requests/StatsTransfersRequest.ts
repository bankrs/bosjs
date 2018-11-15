import StatsRequest from './StatsRequest'

/**
 * Requests data for the transfers chart.
 */
export default class StatsTransfersRequest extends StatsRequest {
    /**
     * Data domain.
     */
    protected readonly domain = '/stats/transfers';
}
