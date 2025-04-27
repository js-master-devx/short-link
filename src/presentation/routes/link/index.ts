import { Router, Request, Response } from 'express'
import { createController } from './post.link'

const link = Router()


link.post('', (req: Request, res: Response) => createController.create(req, res))

export { link }