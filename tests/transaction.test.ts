import { Client } from '..';

const headers = {
    
};
const client = new Client({ headers });

describe('Transactions', () => {
    it('Should return sccess true.', done => {
        client.getTransactions().then(transactions => {
            expect(transactions.status).toEqual(200);
            done();
        });
    });
       
});
