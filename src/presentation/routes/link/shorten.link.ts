// import { LinkRepositoryInMemory } from "@/application/repositories/linkRepositoryInMemory";
import { CreateShortLinkUseCase } from "@/domain/usecase/create-short-link";
import { LinkRepositoryImpl } from "@/infrastruture/database/repositories/LinkRepositoryImpl";
import { LinkService } from "@/infrastruture/link/link.service";
import { ShortenLinkController } from "@/presentation/controller/link/shortenLink.controller";



// const repository: LinkRepositoryInMemory = new LinkRepositoryInMemory()
const repository: LinkRepositoryImpl = new LinkRepositoryImpl()
const service: LinkService = new LinkService(repository)

const createCase: CreateShortLinkUseCase = new CreateShortLinkUseCase(service)
const controller: ShortenLinkController = new ShortenLinkController(createCase)



export { controller as shortenLink }