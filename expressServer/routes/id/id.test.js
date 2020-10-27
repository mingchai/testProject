const id = require('./id');
const request = require("supertest");
const express = require("express");
const app = express();

app.use('/', id);

describe('checks /id endpoint', () => {
  test('status should be 200 with GET request', (done) => {
    request(app)
    .get('/')
    .expect(200, done);
  });
  
  // sending POST request to this endpoint
  test('status should be 405 with POST request', (done) => {
    request(app)
    .post('/')
    .expect(405, done);
  });
  
  test('responds with JSON', (done) => {
    request(app)
    .get('/')
    .expect('Content-Type', /json/, done);
  });
  
  // ensure that the right key is being passed with the JSON response
  test('response contains "id" key', async () => {
    const body = await request(app).get('/');
  
    expect(JSON.parse(body.text))
    .toHaveProperty('id')
  });
})