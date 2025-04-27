import { Link } from "@/domain/entities/link";
import { ILinkRepository } from "@/domain/repositories/ILinkRepository";

export class LinkRepositoryInMemory implements ILinkRepository {
    private links: Link[] = []

    async create(data: Link): Promise<Link> {
        const linkInMemory = Link.create(data.originalUrl, data.shortUrl)
        return linkInMemory;
    }


    async findLinkByShortUrl(shortUrl: string): Promise<Link | null> {
        const linkExists = this.links.find(item => item.shortUrl == shortUrl) || null
        if (!linkExists) throw new Error('Link Not Found')
            const linkFound = Link.create(linkExists.originalUrl, linkExists.shortUrl)
        return linkFound
    }
}