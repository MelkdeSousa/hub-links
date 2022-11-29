import { handleZodError } from "@libs/handleZodError";
import { NewInstance } from "src/types/output";
import { z } from 'zod';
import { EntityError } from "../errors/Entity";

type LinkProps = {
    title: string
    url: string
}

export class Link {
    private _title: string
    private _url: string

    private constructor(props: LinkProps) {
        this.validate(props)

        this._title = props.title
        this._url = props.url
    }

    private validate(props: LinkProps) {
        const schema = z.object({
            url: z.string().url(),
            title: z.string().max(32, 'title can have at most 32 characters')
        })

        const result = schema.safeParse(props)

        if (result.success === false) throw new EntityError('Link', handleZodError(result))
    }

    toJSON() {
        return {
            title: this._title,
            url: this._url
        }
    }

    static create(props: LinkProps): NewInstance<Link> {
        try {
            return {
                instance: new Link(props)
            }
        } catch (error) {
            return {
                error
            }
        }

    }
}