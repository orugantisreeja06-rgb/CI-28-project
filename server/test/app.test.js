const request = require('supertest');
const app = require('../index'); // <-- correct this

describe('GET /', () => {
    it('should return Hello API', async () => {
        const res = await request(app).get('/');
        expect(res.statusCode).toBe(200);
    });
});