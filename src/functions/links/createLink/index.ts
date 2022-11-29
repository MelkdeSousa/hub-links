import { handlerPath } from '@libs/handler-resolver';
import schema from './schema';

/* Creating a serverless function that will be called when a POST request is made to the /links
endpoint. */
export default {
  handler: `${handlerPath(__dirname)}/handler.main`,
  events: [
    {
      http: {
        method: 'post',
        path: 'links',
        request: {
          schemas: {
            'application/json': schema,
          },
        },
      },
    },
  ],
};
