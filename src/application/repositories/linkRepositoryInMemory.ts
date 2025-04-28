import { Link } from "@/domain/entities/link";
import { ILinkRepository } from "@/domain/repositories/ILinkRepository";

const links: Link[] = []
export class LinkRepositoryInMemory implements ILinkRepository {

    async create(data: Link): Promise<Link> {
        const linkInMemory = Link.create(data.originalUrl, data.shortUrl)
        links.push(linkInMemory)
        return linkInMemory;
    }


    async findLinkByShortUrl(shortUrl: string): Promise<Link | null> {
       
        const linkExists = links.find(item => item.props.shortUrl === shortUrl) || null
     
        if (!linkExists) throw new Error('Link Not Found')
            const linkFound = Link.create(linkExists.originalUrl, linkExists.shortUrl)
        return linkFound
    }
}