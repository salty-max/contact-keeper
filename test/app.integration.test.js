import request from 'supertest';
import app from '../src/app';

describe('app', () => {
  it('GETs / and should obtain { message: "Hello World to the Contact Keeper API!" }', async () => {
    expect.assertions(1);
    const res = await request(app)
      .get('/')
      .expect(200);
    expect(res.body).toMatchInlineSnapshot(`
      Object {
        "message": "Hello World to the Contact Keeper API!",
      }
    `);
  });
});
