import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { ApiConfigResolverBase } from "./base/apiConfig.resolver.base";
import { ApiConfig } from "./base/ApiConfig";
import { ApiConfigService } from "./apiConfig.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => ApiConfig)
export class ApiConfigResolver extends ApiConfigResolverBase {
  constructor(
    protected readonly service: ApiConfigService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
