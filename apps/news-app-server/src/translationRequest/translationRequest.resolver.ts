import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { TranslationRequestResolverBase } from "./base/translationRequest.resolver.base";
import { TranslationRequest } from "./base/TranslationRequest";
import { TranslationRequestService } from "./translationRequest.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => TranslationRequest)
export class TranslationRequestResolver extends TranslationRequestResolverBase {
  constructor(
    protected readonly service: TranslationRequestService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
