const { server } = require('../src/server');
const supertest = require('supertest');
const { db } = require('../src/models');
const request = supertest(server);

beforeAll(async () => {
  await db.sync();
});

afterAll(async () => {
  await db.drop();
});

describe('v1 Routes', () => {
  it('creates a record', async () => {
    let response = await request.post('/api/v1/food').send({
      name: 'tacos',
      calories: '100',
      type: 'protein',
    });

    expect(response.status).toEqual(201);
    expect(response.body.name).toEqual('tacos');
  });

  
});