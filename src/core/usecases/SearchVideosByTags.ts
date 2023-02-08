import { IVideoReadRepository } from '../contracts';
import { Video } from '../entities';

export class SearchVideosByTags {
  constructor(private videoRepository: IVideoReadRepository) {}

  async execute(tags: string[]): Promise<Video[]> {
    return await this.videoRepository.findByTags(tags);
  }
}
