import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { NewsArticleService } from "./newsArticle.service";
import { NewsArticleControllerBase } from "./base/newsArticle.controller.base";

@swagger.ApiTags("newsArticles")
@common.Controller("newsArticles")
export class NewsArticleController extends NewsArticleControllerBase {
  constructor(
    protected readonly service: NewsArticleService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
