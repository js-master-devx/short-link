import { LinkRepositoryInMemory } from "@/application/repositories/linkRepositoryInMemory";
import { FindByUrlUseCase } from "@/domain/usecase/find-by-short-url";
import { FindLinkByShortenLinkController } from "@/presentation/controller/link/findLinkByShortenLink.controller";



const repository:LinkRepositoryInMemory =  new LinkRepositoryInMemory()
const findByShortUrlCase:FindByUrlUseCase =  new FindByUrlUseCase(repository)
const controller:FindLinkByShortenLinkController = new FindLinkByShortenLinkController(findByShortUrlCase)


export {controller as findByShortUrl}