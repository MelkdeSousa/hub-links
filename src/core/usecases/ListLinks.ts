import { ILinkReadRepository } from '../contracts/LinkRepository';

export class ListLinksUseCase {
  constructor(private readonly _linkReadRepository: ILinkReadRepository) {}

  async execute() {
    const links = await this._linkReadRepository.getAllLinks();

    return {
      data: links.map((link) => link.toJSON()),
      length: links.length,
    };
  }
}
