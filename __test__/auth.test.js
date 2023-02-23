'use strict';

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

describe('Auth router', () => {
  it('creates a user', async () => {
    let response = await request.post('/signup').send({
      username: 'Tester',
      password: 'pass123',
    });

    console.log(response.body);

    expect(response.status).toEqual(201);
    expect(response.body.username).toEqual('Tester');
  });

  it('allows existing user to signin', async () => {

    let response = await request.post('/signin').auth('Tester', 'pass123');

    expect(response.status).toEqual(200);
    expect(response.body.username).toEqual('Tester');
    expect(response.body.password).toBeTruthy();
  });

}); 
