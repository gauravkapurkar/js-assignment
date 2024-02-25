const request = require('supertest');
const { app } = require('../../index');

describe('News Routes', () => {

    let server;

    beforeAll((done) => {
      server = app.listen(done);
    });
  
    afterAll((done) => {
      server.close(done);
    });

    it('should create a news', async () => {
        const newsData = { title: 'Test News', description: 'Test Content', matchId: 1 };
        const res = await request(app).post('/news').send(newsData);
        expect(res.statusCode).toEqual(201);
    });

    it('should create a news', async () => {
        const newsData = { title: 'Test News', description: 'Test Content', tourId: 1 };
        const res = await request(app).post('/news').send(newsData);
        expect(res.statusCode).toEqual(201);
    });

    it('should create a news', async () => {
        const newsData = { title: 'Test News', description: 'Test Content'};
        const res = await request(app).post('/news').send(newsData);
        expect(res.statusCode).toEqual(400);
    });

    it('should fetch news by match id', async () => {
        const matchId = 1;
        const res = await request(app).get(`/news/match/${matchId}`);
        expect(res.statusCode).toEqual(200);
        expect(Array.isArray(res.body)).toBeTruthy();
    });

    it('should fetch news by sport id', async () => {
        const sportId = 1; 
        const res = await request(app).get(`news/sport/${sportId}`);
        expect(res.statusCode).toEqual(200);
        expect(Array.isArray(res.body)).toBeTruthy();
    });

    it('should fetch news by tour id', async () => {
        const tourId = 1; 
        const res = await request(app).get(`news/tour/${tourId}`);
        expect(res.statusCode).toEqual(200);
        expect(Array.isArray(res.body)).toBeTruthy();
    });

});