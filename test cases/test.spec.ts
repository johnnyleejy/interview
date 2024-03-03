/*
 *  SCENARIO: User wants to swap 1 WETH for USDT.
 *  URL: https://newapi.beyourowndex.com/swap-api/v1/firm-quote
 *  Method: GET
 *  Headers: 'api_key': 'QmiP3qEhEsaaKRMJQWmVM06pTVGzDEEyZxtC6UQv'
 *  Query Params: src_chain=${src_chain}&dst_chain=${dst_chain}&token_in=${token_in}&token_out=${token_out}&amount=${amount}&from_address=${from_address}&to_address=${to_address}
 *  Params object: {
            src_chain: 'ethereum',
            dst_chain: 'ethereum',
            token_in: '0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2',
            token_out: '0xdac17f958d2ee523a2206206994597c13d831ec7',
            amount: 1,
            from_address: '0x88c6C46EBf353A52Bdbab708c23D0c81dAA8134A',
            to_address: '0x697FdEf0996e512A8D1866A657fB407F5f6DA268',
        }
 *  ETH rpc url: https://eth.llamarpc.com
 *  Native router contract address: 0xEAd050515E10fDB3540ccD6f8236C46790508A76
 */


describe('Test Firm Quote', () => {
    it('', async() => {

    });
});
