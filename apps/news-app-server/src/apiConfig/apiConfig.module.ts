import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { ApiConfigModuleBase } from "./base/apiConfig.module.base";
import { ApiConfigService } from "./apiConfig.service";
import { ApiConfigController } from "./apiConfig.controller";
import { ApiConfigResolver } from "./apiConfig.resolver";

@Module({
  imports: [ApiConfigModuleBase, forwardRef(() => AuthModule)],
  controllers: [ApiConfigController],
  providers: [ApiConfigService, ApiConfigResolver],
  exports: [ApiConfigService],
})
export class ApiConfigModule {}
