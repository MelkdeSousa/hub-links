import { ListAllVideoTags } from 'src/core/usecases/ListAllVideoTags';
import { connection } from 'src/infra/database/connection.notion';
import { NotionTagRepository } from 'src/infra/repositories/TagRepository.notion-api';

const videoRepository = new NotionTagRepository(connection);
const listAllVideoTagsUseCase = new ListAllVideoTags(videoRepository);

export const listAllVideoTags = async () =>
  await listAllVideoTagsUseCase.execute();
