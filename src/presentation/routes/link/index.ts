import { Router, Request, Response } from 'express'
import { shortenLink } from './shorten.link'
import { findByShortUrl } from './findByShortUrl'

const link = Router()


link.post('', (req: Request, res: Response) => shortenLink.execute(req, res))
link.get('/:shortUrl', (req: Request, res: Response) => findByShortUrl.execute(req, res))

export { link }