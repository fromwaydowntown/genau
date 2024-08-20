import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { TranslationRequestService } from "./translationRequest.service";
import { TranslationRequestControllerBase } from "./base/translationRequest.controller.base";

@swagger.ApiTags("translationRequests")
@common.Controller("translationRequests")
export class TranslationRequestController extends TranslationRequestControllerBase {
  constructor(
    protected readonly service: TranslationRequestService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
