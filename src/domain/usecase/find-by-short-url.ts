import { Link } from "../entities/link";
import { ILinkRepository } from "../repositories/ILinkRepository";



export class FindByUrlUseCase {
    constructor(private readonly linkRepository: ILinkRepository) { }

    async execute(shortUrl: string): Promise<Link> {
        const result = await this.linkRepository.findLinkByShortUrl(shortUrl)
        if (!result) throw new Error('Link not found')
        return Link.create(result.originalUrl, result.shortUrl)

    }
}