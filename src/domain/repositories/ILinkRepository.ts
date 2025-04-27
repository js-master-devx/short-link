
import { Link } from "../entities/link";

export interface ILinkRepository {
    create(data: Link): Promise<Link>
    findLinkByShortUrl(shortUrl: string): Promise<Link | null>

}