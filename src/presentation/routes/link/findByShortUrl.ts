// import { LinkRepositoryInMemory } from "@/application/repositories/linkRepositoryInMemory";
import { FindByUrlUseCase } from "@/domain/usecase/find-by-short-url";
import { LinkRepositoryImpl } from "@/infrastruture/database/repositories/LinkRepositoryImpl";
import { FindLinkByShortenLinkController } from "@/presentation/controller/link/findLinkByShortenLink.controller";



// const repository:LinkRepositoryInMemory =  new LinkRepositoryInMemory()
const repository: LinkRepositoryImpl = new LinkRepositoryImpl()
const findByShortUrlCase: FindByUrlUseCase = new FindByUrlUseCase(repository)
const controller: FindLinkByShortenLinkController = new FindLinkByShortenLinkController(findByShortUrlCase)


export { controller as findByShortUrl }