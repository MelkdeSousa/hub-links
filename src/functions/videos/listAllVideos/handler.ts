import type { ValidatedEventAPIGatewayProxyEvent } from '@libs/api-gateway';
import { formatJSONResponse } from '@libs/api-gateway';
import { middyfy } from '@libs/lambda';
import { ListAllVideos } from 'src/core/usecases/ListAllVideos';
import { connection } from 'src/infra/database/connection.notion';
import { NotionVideoRepository } from 'src/infra/repositories/VideoRepository.notion-api';

const videoRepository = new NotionVideoRepository(connection);
const listAllVideosUseCase = new ListAllVideos(videoRepository);

const listAllVideos: ValidatedEventAPIGatewayProxyEvent<null> = async () => {
  const links = await listAllVideosUseCase.execute();

  return formatJSONResponse(200, { ...links });
};

export const main = middyfy(listAllVideos);
