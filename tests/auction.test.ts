import { Client } from '..';

const headers = {
    
};
const client = new Client({ headers });

describe('Auctions', () => {
    it('Should return sccess true.', done => {
        client.getAuctions().then(auctions => {
            expect(accounts.status).toEqual(200);
            done();
        });
    });
       
});
