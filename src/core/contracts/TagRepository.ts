import { Tag } from '../entities';

export interface ITagReadRepository {
  getAll(): Promise<Tag[]>;
}
