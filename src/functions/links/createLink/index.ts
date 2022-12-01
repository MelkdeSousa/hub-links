import { handlerPath } from '@libs/handler-resolver';
import { Lambda } from 'src/types/lambda';
import schema from './schema';

const lambda: Lambda = {
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

export default lambda;
