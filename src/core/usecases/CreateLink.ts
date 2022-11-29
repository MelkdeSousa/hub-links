import { ILinkWriteRepository } from "../contracts/LinkRepository"
import { Link } from "../entities/Link"

export class CreateLinkUseCase {
    constructor(private _linkWriteRepository: ILinkWriteRepository) { }

    async execute(input: CreateLinkInput): Promise<void> {
        const { instance: link, error } = Link.create(input)

        if (error) throw error

        this._linkWriteRepository.save(link)
        
        console.table(link);
    }
}

export type CreateLinkInput = {
    title: string
    url: string
}
