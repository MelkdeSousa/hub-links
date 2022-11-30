import { PrismaClient } from '@prisma/client';
import {
  ILinkReadRepository,
  ILinkWriteRepository,
} from 'src/core/contracts/LinkRepository';
import { Link } from 'src/core/entities/Link';

export class PrismaLinkRepository
  implements ILinkWriteRepository, ILinkReadRepository
{
  constructor(private _prismaClient: PrismaClient) {}

  async save(link: Link): Promise<void> {
    const { title, url } = link.toJSON();

    await this._prismaClient.link.create({
      data: {
        title,
        url,
      },
    });
  }

  async getAllLinks(): Promise<Link[]> {
    const data = await this._prismaClient.link.findMany();

    return data
      .map(
        ({ title, url }) =>
          Link.create({
            title,
            url,
          }).instance,
      )
      .map((link) => link);
  }
}
