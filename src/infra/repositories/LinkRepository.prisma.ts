import { PrismaClient } from '@prisma/client';
import { ILinkWriteRepository } from "src/core/contracts/LinkRepository";
import { Link } from "src/core/entities/Link";

export class PrismaLinkRepository implements ILinkWriteRepository {
    constructor(private _prismaClient: PrismaClient) { }

    async save(link: Link): Promise<void> {
        const { title, url } = link.toJSON()

        await this._prismaClient.link.create({
            data: {
                title,
                url
            }
        })
    }

}