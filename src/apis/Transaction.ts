import { Transaction, Options } from '../utils/DataSchemas';
import request from "../utils/request";

export default class Transactions {
    options: Options;
    constructor(options: Options) {
        this.options = options;
    }
    async getTransactions() {
        return request('GET', `/transactions`, this.options);
    }
    async createTransaction(data: Transaction) {
        const requestOptions: Options = {
            ...this.options,
            data: data
        };
        return request('POST', `/transactions`, requestOptions);
    }
    
}
