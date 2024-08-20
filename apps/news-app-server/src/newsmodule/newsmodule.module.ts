import { Module } from "@nestjs/common";
import { NewsModuleService } from "./newsmodule.service";
import { NewsModuleController } from "./newsmodule.controller";
import { NewsModuleResolver } from "./newsmodule.resolver";

@Module({
  controllers: [NewsModuleController],
  providers: [NewsModuleService, NewsModuleResolver],
  exports: [NewsModuleService],
})
export class NewsModuleModule {}
