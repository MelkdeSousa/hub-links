import { SearchVideosByTags } from 'src/core/usecases/SearchVideosByTags';
import { connection } from 'src/infra/database/connection.notion';
import { NotionVideoRepository } from 'src/infra/repositories/VideoRepository.notion-api';

const videosRepository = new NotionVideoRepository(connection);
const searchVideosByTagsUseCase = new SearchVideosByTags(videosRepository);

export const searchVideosByTags = async (tags: string[]) =>
  await searchVideosByTagsUseCase.execute(tags);
