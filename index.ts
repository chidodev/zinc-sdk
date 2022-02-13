const objectAssignDeep = require(`object-assign-deep`);

import Transactions from './src/apis/Transaction';

import Auctions from './src/apis/Auction';

import * as dataSchemas from './src/utils/DataSchemas';


const config = require('./config');

export class Client {
    options: dataSchemas.Options;

    /**
     * Initiate client instance
     * @param options Optional. Set options for HTTP requests
     */
    constructor(options?: dataSchemas.Options) {
        const defaultOptions = {
            headers: {},
            baseURL: config.baseUrl,
            version: config.version,
            timeout: config.timeout,
            responseType: 'json'
        };
        this.options = objectAssignDeep({}, defaultOptions, options);
    }

    /**
     * Get All Auctions
     * @param options Optional. Set options for HTTP requests
     */
    getAuctions(options?: dataSchemas.Options) {
        let requestOptions = objectAssignDeep({}, this.options, options);
        return new Auctions(requestOptions).getAuctions();
    }

    
    /**
     * Get account's transactions
     * @param options Optional. Set options for HTTP requests
     */
    getTransactions(
        options?: dataSchemas.Options
    ) {
        let requestOptions = objectAssignDeep({}, this.options, options);
        return new Transactions(requestOptions).getTransactions();
    }

    /**
     * Create Auction
     * @param body Body of auction
     * @param options Optional. Set options for HTTP requests
     */
    createAuction(
        body: dataSchemas.Auction,
        options?: dataSchemas.Options
    ) {
        let requestOptions = objectAssignDeep({}, this.options, options);
        return new Auctions(requestOptions).createAuction(body);
    }

    /**
     * Create Transaction
     * @param body Body of order
     * @param options Optional. Set options for HTTP requests
     */
    createTransaction(
        body: dataSchemas.Transaction,
        options?: dataSchemas.Options
    ) {
        let requestOptions = objectAssignDeep({}, this.options, options);
        return new Transactions(requestOptions).createTransaction(body);
    }

    
}
