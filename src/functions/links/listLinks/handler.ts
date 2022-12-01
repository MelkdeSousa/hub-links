import type { ValidatedEventAPIGatewayProxyEvent } from '@libs/api-gateway';
import { formatJSONResponse } from '@libs/api-gateway';
import { middyfy } from '@libs/lambda';
import { ListLinksUseCase } from 'src/core/usecases/ListLinks';
import { connection } from 'src/infra/database/connection.prisma';
import { PrismaLinkRepository } from 'src/infra/repositories/LinkRepository.prisma';

const linkRepository = new PrismaLinkRepository(connection);
const listLinksUseCase = new ListLinksUseCase(linkRepository);

const createLink: ValidatedEventAPIGatewayProxyEvent<null> = async () => {
  const links = await listLinksUseCase.execute();

  return formatJSONResponse(200, { ...links });
};

export const main = middyfy(createLink);
