import { Video } from '../entities';

export interface IVideoReadRepository {
  getAll(): Promise<Video[]>;
  findByTags(tags: string[]): Promise<Video[]>;
}
