import { ListAllVideos } from 'src/core/usecases/ListAllVideos';
import { connection } from 'src/infra/database/connection.notion';
import { NotionVideoRepository } from 'src/infra/repositories/VideoRepository.notion-api';

const videoRepository = new NotionVideoRepository(connection);
const listAllVideosUseCase = new ListAllVideos(videoRepository);

export const listAllVideos = async () => await listAllVideosUseCase.execute()

