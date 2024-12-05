/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { ApiConfig } from "./ApiConfig";
import { ApiConfigCountArgs } from "./ApiConfigCountArgs";
import { ApiConfigFindManyArgs } from "./ApiConfigFindManyArgs";
import { ApiConfigFindUniqueArgs } from "./ApiConfigFindUniqueArgs";
import { CreateApiConfigArgs } from "./CreateApiConfigArgs";
import { UpdateApiConfigArgs } from "./UpdateApiConfigArgs";
import { DeleteApiConfigArgs } from "./DeleteApiConfigArgs";
import { ApiConfigService } from "../apiConfig.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => ApiConfig)
export class ApiConfigResolverBase {
  constructor(
    protected readonly service: ApiConfigService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "ApiConfig",
    action: "read",
    possession: "any",
  })
  async _apiConfigsMeta(
    @graphql.Args() args: ApiConfigCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [ApiConfig])
  @nestAccessControl.UseRoles({
    resource: "ApiConfig",
    action: "read",
    possession: "any",
  })
  async apiConfigs(
    @graphql.Args() args: ApiConfigFindManyArgs
  ): Promise<ApiConfig[]> {
    return this.service.apiConfigs(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => ApiConfig, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "ApiConfig",
    action: "read",
    possession: "own",
  })
  async apiConfig(
    @graphql.Args() args: ApiConfigFindUniqueArgs
  ): Promise<ApiConfig | null> {
    const result = await this.service.apiConfig(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => ApiConfig)
  @nestAccessControl.UseRoles({
    resource: "ApiConfig",
    action: "create",
    possession: "any",
  })
  async createApiConfig(
    @graphql.Args() args: CreateApiConfigArgs
  ): Promise<ApiConfig> {
    return await this.service.createApiConfig({
      ...args,
      data: args.data,
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => ApiConfig)
  @nestAccessControl.UseRoles({
    resource: "ApiConfig",
    action: "update",
    possession: "any",
  })
  async updateApiConfig(
    @graphql.Args() args: UpdateApiConfigArgs
  ): Promise<ApiConfig | null> {
    try {
      return await this.service.updateApiConfig({
        ...args,
        data: args.data,
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => ApiConfig)
  @nestAccessControl.UseRoles({
    resource: "ApiConfig",
    action: "delete",
    possession: "any",
  })
  async deleteApiConfig(
    @graphql.Args() args: DeleteApiConfigArgs
  ): Promise<ApiConfig | null> {
    try {
      return await this.service.deleteApiConfig(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }
}
