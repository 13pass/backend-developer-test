'use strict';

let request = require('supertest');

const app = require('../api/app');

beforeAll(async () => {
  request = await request(app.callback());
});

describe('routes: index', () => {
  test('should be able to query root route for API', async () => {
    const response = await request.get('/');
    expect(response.status).toEqual(200);
    expect(response.type).toEqual('application/json');
    expect(response.body.data.msg).toEqual('You have reached the board API!');
  });
});
