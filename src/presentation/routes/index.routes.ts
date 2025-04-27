import { Router } from "express";
import { link } from "./link";

const router: Router = Router()



router.use('/link', link)


export { router }