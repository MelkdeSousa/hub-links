import { ITagReadRepository } from '../contracts';

export class ListAllVideoTags {
  constructor(private tagRepository: ITagReadRepository) {}

  async execute() {
    return await this.tagRepository.getAll();
  }
}
