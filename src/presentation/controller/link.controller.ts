import { CreateShortLinkUseCase } from "@/domain/usecase/create-short-link";
import { Request, Response } from "express";

export class LinkController {
    constructor(
        private readonly createLinkUseCase: CreateShortLinkUseCase
    ) { }


    async create(req: Request, res: Response):Promise<any> {
        const { url }: { url: string | null } = req.body

        if (!url)
            return res.status(400).json({ error: 'URL  required' })

        try {
            const result = await this.createLinkUseCase.execute(url)
           return res.status(201).json({ link: result.shortUrl })
        } catch (error) {
           return res.status(500).json({ error: 'Error to shorten url' })
        }
    }
}