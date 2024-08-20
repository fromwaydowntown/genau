/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import * as nestAccessControl from "nest-access-control";
import * as defaultAuthGuard from "../../auth/defaultAuth.guard";
import { NewsArticleService } from "../newsArticle.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { NewsArticleCreateInput } from "./NewsArticleCreateInput";
import { NewsArticle } from "./NewsArticle";
import { NewsArticleFindManyArgs } from "./NewsArticleFindManyArgs";
import { NewsArticleWhereUniqueInput } from "./NewsArticleWhereUniqueInput";
import { NewsArticleUpdateInput } from "./NewsArticleUpdateInput";
import { TranslationRequestFindManyArgs } from "../../translationRequest/base/TranslationRequestFindManyArgs";
import { TranslationRequest } from "../../translationRequest/base/TranslationRequest";
import { TranslationRequestWhereUniqueInput } from "../../translationRequest/base/TranslationRequestWhereUniqueInput";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class NewsArticleControllerBase {
  constructor(
    protected readonly service: NewsArticleService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: NewsArticle })
  @nestAccessControl.UseRoles({
    resource: "NewsArticle",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async createNewsArticle(
    @common.Body() data: NewsArticleCreateInput
  ): Promise<NewsArticle> {
    return await this.service.createNewsArticle({
      data: data,
      select: {
        content: true,
        createdAt: true,
        id: true,
        publishedDate: true,
        source: true,
        title: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [NewsArticle] })
  @ApiNestedQuery(NewsArticleFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "NewsArticle",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async newsArticles(@common.Req() request: Request): Promise<NewsArticle[]> {
    const args = plainToClass(NewsArticleFindManyArgs, request.query);
    return this.service.newsArticles({
      ...args,
      select: {
        content: true,
        createdAt: true,
        id: true,
        publishedDate: true,
        source: true,
        title: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: NewsArticle })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "NewsArticle",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async newsArticle(
    @common.Param() params: NewsArticleWhereUniqueInput
  ): Promise<NewsArticle | null> {
    const result = await this.service.newsArticle({
      where: params,
      select: {
        content: true,
        createdAt: true,
        id: true,
        publishedDate: true,
        source: true,
        title: true,
        updatedAt: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: NewsArticle })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "NewsArticle",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async updateNewsArticle(
    @common.Param() params: NewsArticleWhereUniqueInput,
    @common.Body() data: NewsArticleUpdateInput
  ): Promise<NewsArticle | null> {
    try {
      return await this.service.updateNewsArticle({
        where: params,
        data: data,
        select: {
          content: true,
          createdAt: true,
          id: true,
          publishedDate: true,
          source: true,
          title: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: NewsArticle })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "NewsArticle",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async deleteNewsArticle(
    @common.Param() params: NewsArticleWhereUniqueInput
  ): Promise<NewsArticle | null> {
    try {
      return await this.service.deleteNewsArticle({
        where: params,
        select: {
          content: true,
          createdAt: true,
          id: true,
          publishedDate: true,
          source: true,
          title: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id/translationRequests")
  @ApiNestedQuery(TranslationRequestFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "TranslationRequest",
    action: "read",
    possession: "any",
  })
  async findTranslationRequests(
    @common.Req() request: Request,
    @common.Param() params: NewsArticleWhereUniqueInput
  ): Promise<TranslationRequest[]> {
    const query = plainToClass(TranslationRequestFindManyArgs, request.query);
    const results = await this.service.findTranslationRequests(params.id, {
      ...query,
      select: {
        createdAt: true,
        id: true,

        newsArticle: {
          select: {
            id: true,
          },
        },

        originalContent: true,
        status: true,
        translatedContent: true,
        updatedAt: true,

        user: {
          select: {
            id: true,
          },
        },
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/translationRequests")
  @nestAccessControl.UseRoles({
    resource: "NewsArticle",
    action: "update",
    possession: "any",
  })
  async connectTranslationRequests(
    @common.Param() params: NewsArticleWhereUniqueInput,
    @common.Body() body: TranslationRequestWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      translationRequests: {
        connect: body,
      },
    };
    await this.service.updateNewsArticle({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/translationRequests")
  @nestAccessControl.UseRoles({
    resource: "NewsArticle",
    action: "update",
    possession: "any",
  })
  async updateTranslationRequests(
    @common.Param() params: NewsArticleWhereUniqueInput,
    @common.Body() body: TranslationRequestWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      translationRequests: {
        set: body,
      },
    };
    await this.service.updateNewsArticle({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/translationRequests")
  @nestAccessControl.UseRoles({
    resource: "NewsArticle",
    action: "update",
    possession: "any",
  })
  async disconnectTranslationRequests(
    @common.Param() params: NewsArticleWhereUniqueInput,
    @common.Body() body: TranslationRequestWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      translationRequests: {
        disconnect: body,
      },
    };
    await this.service.updateNewsArticle({
      where: params,
      data,
      select: { id: true },
    });
  }
}