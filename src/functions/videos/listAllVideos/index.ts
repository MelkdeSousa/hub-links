import { handlerPath } from '@libs/handler-resolver';
import { Lambda } from 'src/types/lambda';

const lambda: Lambda = {
  handler: `${handlerPath(__dirname)}/handler.main`,
  events: [
    {
      http: {
        method: 'get',
        path: 'videos',
      },
    },
  ],
};

export default lambda;
