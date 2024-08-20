import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { TranslationRequestModuleBase } from "./base/translationRequest.module.base";
import { TranslationRequestService } from "./translationRequest.service";
import { TranslationRequestController } from "./translationRequest.controller";
import { TranslationRequestResolver } from "./translationRequest.resolver";

@Module({
  imports: [TranslationRequestModuleBase, forwardRef(() => AuthModule)],
  controllers: [TranslationRequestController],
  providers: [TranslationRequestService, TranslationRequestResolver],
  exports: [TranslationRequestService],
})
export class TranslationRequestModule {}
