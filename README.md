# Simple SDK for Gamesta API
    Frontend : https://zinc-f-dev.gamesta.ai
    Backend : https://apizinc.gamesta.ai

## Description

    1. Get Auction List
    2. Create Auction
    3. Get Transaction List
    4. Create Transaction  


## Installation
    Not published as npm package but Maybe

    ```
    $ npm install @gamesta/zinc-sdk
    ```
## Usage

    import SDK from "@gamesta/zinc-sdk";

    const options = {
        headers: {
            
        }
    }

    const client = new SDK.Client(options)

    const auctions = await client.getAuctions(options);

## Response Example
    - Transaction 

    ```
    {
    "status": 200,
    "scccess": true,
    "data": {
        "wallet": null,
        "launch_token": null,
        "launch_token_logo": null,
        "start_at": null,
        "end_at": null,
        "id": 17,
        "updatedAt": "2022-02-13T15:27:00.324Z",
        "createdAt": "2022-02-13T15:27:00.324Z"
    },
    "message": ""
    }
    ```

    - Auction

    ```
    {
    "status": 200,
    "scccess": true,
    "data": {
        "count": 6,
        "rows": [
            {
                "id": 8,
                "auction_type": null,
                "wallet": "0xfe27A3C27d0eCEB8Dcf70843a699709fEe7d1e1b",
                "launch_token": "0x55cd00764e85aa3b6b34130c983fff9eb458250c",
                "collateral_token": "wETH",
                "launch_token_logo": "https://www.netlify.com/v3/static/favicon/favicon-32x32.png",
                "start_at": "2022-02-10T04:19:00.000Z",
                "end_at": "2022-02-24T04:19:00.000Z",
                "launch_amount": 10,
                "collateral_amount": 10,
                "chain": "eth",
                "start_weight": 99,
                "end_weight": 1,
                "commission_rate": 6,
                "liquidity": 500057,
                "funds_raised": 98.56,
                "network": "ETH",
                "price": 0.00199,
                "total_volume": 79822.6,
                "token_sold": 50000,
                "token_name": "Gamesta",
                "description": "Fair Launch Description test2",
                "collateral_token_icon": "/static/media/ETH.37e41c0e.svg",
                "learn_more": "https://gamesta.ai",
                "createdAt": "2022-02-10T10:51:04.000Z",
                "updatedAt": "2022-02-10T10:51:04.000Z"
            },
            {
                "id": 9,
                "auction_type": null,
                "wallet": "0xfe27A3C27d0eCEB8Dcf70843a699709fEe7d1e1b",
                "launch_token": "0x303eF2eA8bb4996a300aFF7e6752414C752dC164",
                "collateral_token": "wETH",
                "launch_token_logo": "https://gamesta.ai/static/media/image34.ad855541.png",
                "start_at": "2022-02-10T04:45:00.000Z",
                "end_at": "2022-02-20T04:45:00.000Z",
                "launch_amount": 0.56,
                "collateral_amount": 0.05,
                "chain": "eth",
                "start_weight": 99,
                "end_weight": 1,
                "commission_rate": 6.5,
                "liquidity": 500057,
                "funds_raised": 98.56,
                "network": "ETH",
                "price": 0.00199,
                "total_volume": 79822.6,
                "token_sold": 50000,
                "token_name": "Gamesta",
                "description": "Fair Launch Description test",
                "collateral_token_icon": "/static/media/ETH.37e41c0e.svg",
                "learn_more": "https://gamesta.ai",
                "createdAt": "2022-02-10T11:16:47.000Z",
                "updatedAt": "2022-02-10T11:16:47.000Z"
            },
            {
                "id": 10,
                "auction_type": null,
                "wallet": "0xfe27A3C27d0eCEB8Dcf70843a699709fEe7d1e1b",
                "launch_token": "0x303eF2eA8bb4996a300aFF7e6752414C752dC164",
                "collateral_token": "wETH",
                "launch_token_logo": "https://gamesta.ai/static/media/image31.ac4853ac.png",
                "start_at": "2022-02-11T04:45:00.000Z",
                "end_at": "2022-02-28T04:45:00.000Z",
                "launch_amount": 0.76,
                "collateral_amount": 0.075,
                "chain": "eth",
                "start_weight": 40,
                "end_weight": 18,
                "commission_rate": 6.8,
                "liquidity": 500057,
                "funds_raised": 98.56,
                "network": "ETH",
                "price": 0.00199,
                "total_volume": 79822.6,
                "token_sold": 50000,
                "token_name": "Gamesta",
                "description": "Fair Launch Description test",
                "collateral_token_icon": "/static/media/ETH.37e41c0e.svg",
                "learn_more": "https://gamesta.ai",
                "createdAt": "2022-02-10T11:19:41.000Z",
                "updatedAt": "2022-02-10T11:19:41.000Z"
            },
            {
                "id": 15,
                "auction_type": null,
                "wallet": "0xfe27A3C27d0eCEB8Dcf70843a699709fEe7d1e1b",
                "launch_token": "0x303eF2eA8bb4996a300aFF7e6752414C752dC164",
                "collateral_token": "wETH",
                "launch_token_logo": "https://gamesta.ai/static/media/spencer_taring.7b0705b8.png",
                "start_at": "2022-02-11T10:05:00.000Z",
                "end_at": "2022-02-19T10:05:00.000Z",
                "launch_amount": 0.158,
                "collateral_amount": 0.33,
                "chain": "eth",
                "start_weight": 52,
                "end_weight": 40,
                "commission_rate": 0.5,
                "liquidity": 590657,
                "funds_raised": 898.56,
                "network": "ETH",
                "price": 0.0199,
                "total_volume": 179823,
                "token_sold": 90900,
                "token_name": "Gamesta",
                "description": "Fair Launch Description live test",
                "collateral_token_icon": "/static/media/ETH.37e41c0e.svg",
                "learn_more": "https://gamesta.ai",
                "createdAt": "2022-02-11T04:44:16.000Z",
                "updatedAt": "2022-02-11T04:44:16.000Z"
            },
            {
                "id": 16,
                "auction_type": null,
                "wallet": "0xfe27A3C27d0eCEB8Dcf70843a699709fEe7d1e1b",
                "launch_token": "0x303eF2eA8bb4996a300aFF7e6752414C752dC164",
                "collateral_token": "wETH",
                "launch_token_logo": "https://gamesta.ai/static/media/image34.ad855541.png",
                "start_at": "2022-02-11T02:05:00.000Z",
                "end_at": "2022-02-14T02:05:00.000Z",
                "launch_amount": 10,
                "collateral_amount": 10,
                "chain": "eth",
                "start_weight": 57,
                "end_weight": 50,
                "commission_rate": 5,
                "liquidity": 590657,
                "funds_raised": 898.56,
                "network": "ETH",
                "price": 0.0199,
                "total_volume": 179823,
                "token_sold": 90900,
                "token_name": "Gamesta",
                "description": "Fair Launch Description test",
                "collateral_token_icon": "/static/media/ETH.37e41c0e.svg",
                "learn_more": "https://gamesta.ai",
                "createdAt": "2022-02-11T08:40:53.000Z",
                "updatedAt": "2022-02-11T08:40:53.000Z"
            },
            {
                "id": 17,
                "auction_type": null,
                "wallet": null,
                "launch_token": null,
                "collateral_token": null,
                "launch_token_logo": null,
                "start_at": null,
                "end_at": null,
                "launch_amount": null,
                "collateral_amount": null,
                "chain": null,
                "start_weight": null,
                "end_weight": null,
                "commission_rate": null,
                "liquidity": null,
                "funds_raised": null,
                "network": null,
                "price": null,
                "total_volume": null,
                "token_sold": null,
                "token_name": null,
                "description": null,
                "collateral_token_icon": null,
                "learn_more": null,
                "createdAt": "2022-02-13T15:27:00.000Z",
                "updatedAt": "2022-02-13T15:27:00.000Z"
            }
        ]
    },
    "message": ""
    }
    ```