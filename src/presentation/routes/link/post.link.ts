import { LinkRepositoryInMemory } from "@/application/repositories/linkRepositoryInMemory";
import { CreateShortLinkUseCase } from "@/domain/usecase/create-short-link";
import { LinkService } from "@/infrastruture/link/link.service";
import { LinkController } from "@/presentation/controller/link.controller";



const repostory: LinkRepositoryInMemory = new LinkRepositoryInMemory()
const service: LinkService = new LinkService(repostory)

const create: CreateShortLinkUseCase = new CreateShortLinkUseCase(service)
const controller: LinkController = new LinkController(create)



export { controller as createController }