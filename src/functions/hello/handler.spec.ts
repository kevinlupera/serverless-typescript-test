import type { Context, Callback } from 'aws-lambda';
import { main as handler } from './handler';

describe('Hello Handler', () => {
  it('should pass with mocked post request', async () => {
    const event = {
      headers: { 'Content-Type': 'application/json' },
    };
    const context = {} as Context;
    const callback = null as Callback;

    const response = await handler(event, context, callback);

    expect(response).toMatchObject({
      body:
        '{"date":"2023-03-10T21:35:35.872Z","event":{"headers":{"Content-Type":"application/json"}}}',
      statusCode: 200,
    });
  });
});
