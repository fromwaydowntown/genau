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
import { TranslationRequestService } from "../translationRequest.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { TranslationRequestCreateInput } from "./TranslationRequestCreateInput";
import { TranslationRequest } from "./TranslationRequest";
import { TranslationRequestFindManyArgs } from "./TranslationRequestFindManyArgs";
import { TranslationRequestWhereUniqueInput } from "./TranslationRequestWhereUniqueInput";
import { TranslationRequestUpdateInput } from "./TranslationRequestUpdateInput";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class TranslationRequestControllerBase {
  constructor(
    protected readonly service: TranslationRequestService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: TranslationRequest })
  @nestAccessControl.UseRoles({
    resource: "TranslationRequest",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async createTranslationRequest(
    @common.Body() data: TranslationRequestCreateInput
  ): Promise<TranslationRequest> {
    return await this.service.createTranslationRequest({
      data: {
        ...data,

        newsArticle: data.newsArticle
          ? {
              connect: data.newsArticle,
            }
          : undefined,

        user: data.user
          ? {
              connect: data.user,
            }
          : undefined,
      },
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
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [TranslationRequest] })
  @ApiNestedQuery(TranslationRequestFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "TranslationRequest",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async translationRequests(
    @common.Req() request: Request
  ): Promise<TranslationRequest[]> {
    const args = plainToClass(TranslationRequestFindManyArgs, request.query);
    return this.service.translationRequests({
      ...args,
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
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: TranslationRequest })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "TranslationRequest",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async translationRequest(
    @common.Param() params: TranslationRequestWhereUniqueInput
  ): Promise<TranslationRequest | null> {
    const result = await this.service.translationRequest({
      where: params,
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
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: TranslationRequest })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "TranslationRequest",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async updateTranslationRequest(
    @common.Param() params: TranslationRequestWhereUniqueInput,
    @common.Body() data: TranslationRequestUpdateInput
  ): Promise<TranslationRequest | null> {
    try {
      return await this.service.updateTranslationRequest({
        where: params,
        data: {
          ...data,

          newsArticle: data.newsArticle
            ? {
                connect: data.newsArticle,
              }
            : undefined,

          user: data.user
            ? {
                connect: data.user,
              }
            : undefined,
        },
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
  @swagger.ApiOkResponse({ type: TranslationRequest })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "TranslationRequest",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async deleteTranslationRequest(
    @common.Param() params: TranslationRequestWhereUniqueInput
  ): Promise<TranslationRequest | null> {
    try {
      return await this.service.deleteTranslationRequest({
        where: params,
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
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }
}