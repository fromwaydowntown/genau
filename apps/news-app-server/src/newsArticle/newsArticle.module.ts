import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { NewsArticleModuleBase } from "./base/newsArticle.module.base";
import { NewsArticleService } from "./newsArticle.service";
import { NewsArticleController } from "./newsArticle.controller";
import { NewsArticleResolver } from "./newsArticle.resolver";

@Module({
  imports: [NewsArticleModuleBase, forwardRef(() => AuthModule)],
  controllers: [NewsArticleController],
  providers: [NewsArticleService, NewsArticleResolver],
  exports: [NewsArticleService],
})
export class NewsArticleModule {}
