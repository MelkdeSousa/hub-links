import { ILinkWriteRepository } from '../contracts/LinkRepository';
import { Link } from '../entities/Link';

export class CreateLinkUseCase {
  constructor(private _linkWriteRepository: ILinkWriteRepository) {}

  async execute(input: CreateLinkInput): Promise<void> {
    const { instance: link, error } = Link.create(input);

    if (error) throw error;

    try {
      await this._linkWriteRepository.save(link);
    } catch (error) {
      throw new Error('can not save link, raison: ' + error.message);
    }
  }
}

export type CreateLinkInput = {
  title: string;
  url: string;
};
