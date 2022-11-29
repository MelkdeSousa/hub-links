import type { ValidatedEventAPIGatewayProxyEvent } from '@libs/api-gateway';
import { formatJSONResponse } from '@libs/api-gateway';
import { middyfy } from '@libs/lambda';
import { CreateLinkUseCase } from 'src/core/usecases/CreateLink';
import { connection } from 'src/infra/database/connection.prisma';
import { PrismaLinkRepository } from 'src/infra/repositories/LinkRepository.prisma';

import schema from './schema';

const linkRepository = new PrismaLinkRepository(connection)
const createLinkUseCase = new CreateLinkUseCase(linkRepository)

const createLink: ValidatedEventAPIGatewayProxyEvent<typeof schema> = async (event) => {
  const {body} = event

  console.log(body);
  
  await createLinkUseCase.execute(
   body
  )

  return formatJSONResponse(201);
};

export const main = middyfy(createLink);
