
import validUrl from 'valid-url'
import shortid from 'shortid'
import { ILinkRepository } from '@/domain/repositories/ILinkRepository'
import { Link } from '@/domain/entities/link'
export interface ILinkService {
    shortenLink(originalUrl: string): Promise<string>
}


export class LinkService implements ILinkService {

    constructor(private readonly linkRepository: ILinkRepository) { }

    async shortenLink(originalUrl: string): Promise<string> {
        if (!validUrl.isUri(originalUrl)) throw new Error('URL invalid')
        const shortUrl: string = shortid.generate()
        const link = Link.create(originalUrl, shortUrl)
        await this.linkRepository.create(link)

        return shortUrl

    }
}