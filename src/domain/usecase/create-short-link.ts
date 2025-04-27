
import { Link } from "../entities/link";
import { ILinkService } from "@/infrastruture/link/link.service";

export class CreateShortLinkUseCase {
    constructor(private readonly linkService: ILinkService) { }

    async execute(originalUrl: string): Promise<Link> {
        const shortUrl = await this.linkService.shortenLink(originalUrl)
        return Link.create(originalUrl, shortUrl)

    }
}