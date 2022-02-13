import { AxiosRequestConfig } from 'axios';


export interface Auction {
    auction_type?: string;
    wallet?: string;
    launch_token?: string;
    collateral_token?: string;
    launch_token_logo?: string;
    start_at?: number;
    end_at?: number;
    launch_amount?: string;
    collateral_amount?: string;
    chain?: string;
    start_weight?: string;
    end_weight?: string;
    commission_rate?: string;
    liquidity?: string;
    funds_raised?: string;
    network?: string;
    price?: string;
    total_volume?: string;
    token_volume?: string;
    token_sold?: string;
    token_name?: string;
    description?: string;
    collateral_token_icon?: string;
    learn_more?: string;
    
}
export interface Transaction {
    wallet?: string;
    launch_token?: string;
    launch_token_logo?: number;
    start_at?: string;
    end_at?: string;
}

export interface Options extends AxiosRequestConfig {
    version?: string;
    json?: boolean;
    data?: object;
    headers?: Headers;
}

export interface Headers {
    'x-request-id'?: string;
    'x-session-id'?: string;
    'x-authorization'?: string;
    'x-api-key'?: string;
}
