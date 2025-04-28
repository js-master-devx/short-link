import { Link } from "@/domain/entities/link";
import { ILinkRepository } from "@/domain/repositories/ILinkRepository";
import { LinkModel } from "../models/link.model";

export class LinkRepositoryImpl implements ILinkRepository {
    async create(data: Link): Promise<Link> {
        const linkDocument = new LinkModel(data)
        await linkDocument.save()
        return Link.create(linkDocument.originalUrl, linkDocument.shortUrl)
    }
    async findLinkByShortUrl(shortUrl: string): Promise<Link | null> {
        const linkDocument = await LinkModel.findOne({ shortUrl })

        if (!linkDocument) throw new Error('Url not Found')

        return Link.create(linkDocument.originalUrl, linkDocument.shortUrl)
    }


}