import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { NewsArticleServiceBase } from "./base/newsArticle.service.base";

@Injectable()
export class NewsArticleService extends NewsArticleServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
