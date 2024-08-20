import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { NewsModuleService } from "./newsmodule.service";
import { TranslationRequestInput } from "../newsModule/TranslationRequestInput";

@swagger.ApiTags("newsModules")
@common.Controller("newsModules")
export class NewsModuleController {
  constructor(protected readonly service: NewsModuleService) {}

  @common.Get("/news/fetch")
  @swagger.ApiOkResponse({
    type: String
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async FetchNews(
    @common.Body()
    body: TranslationRequestInput
  ): Promise<string> {
        return this.service.FetchNews(body);
      }

  @common.Post("/news/translate")
  @swagger.ApiOkResponse({
    type: String
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async TranslateNews(
    @common.Body()
    body: TranslationRequestInput
  ): Promise<string> {
        return this.service.TranslateNews(body);
      }
}
