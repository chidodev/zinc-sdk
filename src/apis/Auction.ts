import { Options, Auction } from '../utils/DataSchemas';
import request from '../utils/request';

export default class Auctions {
    options: Options;
    constructor(options: Options) {
        this.options = options;
    }
    async getAuctions() {
        return request(
            'GET',
            `/auctions`,
            this.options
        );
    }
    async createAuction(data: Auction) {
        const requestOptions: Options = {
            ...this.options,
            data: data
        };
        return request('POST', `/auctions`, requestOptions);
    }

}
