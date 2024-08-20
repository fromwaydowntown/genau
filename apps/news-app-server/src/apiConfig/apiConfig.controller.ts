import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { ApiConfigService } from "./apiConfig.service";
import { ApiConfigControllerBase } from "./base/apiConfig.controller.base";

@swagger.ApiTags("apiConfigs")
@common.Controller("apiConfigs")
export class ApiConfigController extends ApiConfigControllerBase {
  constructor(
    protected readonly service: ApiConfigService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
