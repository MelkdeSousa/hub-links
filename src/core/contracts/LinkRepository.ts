import { Link } from "../entities/Link";

export interface ILinkWriteRepository {
    save(link: Link): Promise<void>
}