import { Link } from "@/domain/entities/link";
import { FindByUrlUseCase } from "@/domain/usecase/find-by-short-url";
import { Request, Response } from "express";

export class FindLinkByShortenLinkController{

    constructor(private readonly findByShortUrl:FindByUrlUseCase){}

    async execute(req:Request, res:Response):Promise<any>{

        const shortUrl:string  =  req.params.shortUrl

        if(!shortUrl) throw new Error('Not URL found')
            try {
                const link =  await this.findByShortUrl.execute(shortUrl)
                const result =   Link.create(link.originalUrl, link.shortUrl)
               return res.status(201).json({ link: result.originalUrl })
            } catch (error) {
               
               return res.status(500).json({ error: 'Error to find URL by short url' })
            }
        
    }
}