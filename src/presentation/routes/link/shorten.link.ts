import { LinkRepositoryInMemory } from "@/application/repositories/linkRepositoryInMemory";
import { CreateShortLinkUseCase } from "@/domain/usecase/create-short-link";
import { LinkService } from "@/infrastruture/link/link.service";
import { ShortenLinkController } from "@/presentation/controller/link/shortenLink.controller";



const repostory: LinkRepositoryInMemory = new LinkRepositoryInMemory()
const service: LinkService = new LinkService(repostory)

const createCase: CreateShortLinkUseCase = new CreateShortLinkUseCase(service)
const controller: ShortenLinkController = new ShortenLinkController(createCase)



export { controller as shortenLink }