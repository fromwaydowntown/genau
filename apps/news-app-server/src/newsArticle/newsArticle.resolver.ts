import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { NewsArticleResolverBase } from "./base/newsArticle.resolver.base";
import { NewsArticle } from "./base/NewsArticle";
import { NewsArticleService } from "./newsArticle.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => NewsArticle)
export class NewsArticleResolver extends NewsArticleResolverBase {
  constructor(
    protected readonly service: NewsArticleService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
