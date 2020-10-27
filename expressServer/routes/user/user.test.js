const user = require('./user');
const request = require("supertest");
const express = require("express");
const app = express();

app.use(express.urlencoded({ extended: false }));

app.use('/', user);

describe('check GET /user', () => {
  // check status of response
  test('status should be 200', done => {
    request(app)
    .get('/')
    .expect(200, done)
  });

  // check format of response's data
  test('responds with JSON', done => {
    request(app)
    .get('/')
    .expect('Content-Type', /json/, done);
  });

  // check that response is not null
  test('response is not null', async () => {
    const body = await request(app).get('/');
    expect(body.text)
    .not
    .toBe({});
  });

  // check that response is sending the appropriate response
  test('response contains name, email, account, biography,  and tone', async () => {
    const body = await request(app).get('/');
    const jsonResponseObj = JSON.parse(body.text);
    
    // check for name
    expect(jsonResponseObj)
    .toHaveProperty('name')

    // check for email
    expect(jsonResponseObj)
    .toHaveProperty('email')

    // check for account
    expect(jsonResponseObj)
    .toHaveProperty('account')

    // check for biography 
    expect(jsonResponseObj)
    .toHaveProperty('biography')

    // check for tone
    expect(jsonResponseObj)
    .toHaveProperty('tone')
  });


});

describe('check POST /user', () => {
  let body;
  beforeAll(async () => {
    body = await request(app).post('/');
  });

  // check status of response - 200 even if save 'fails'
  test('status should be 200', done => {
    request(app)
    .post('/')
    .expect(200, done)
  });

  // check format of response's data
  test('responds with JSON', done => {
    request(app)
    .post('/')
    .expect('Content-Type', /json/, done);
  });

  // check that response is not null
  test('response is not null', async () => {
    expect(body.text)
    .not
    .toBe({});
  });

  // check that response contains a status and message
  test('response should have a status and message', async () => {
    const jsonResponse = JSON.parse(body.text);

    expect(jsonResponse).toHaveProperty('status');
    expect(jsonResponse).toHaveProperty('message');
  });

});