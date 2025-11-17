const request = require('supertest');
const app = require('./app');

describe('API Test Suite', () => {
    it('GET /', async () => {
        await request(app).get('/').expect(200);
    });

    it('GET /will', async () => {
        await request(app).get('/will').expect(200);
    });

    it('GET /ready', async () => {
        await request(app).get('/ready').expect(200);
    });
});
