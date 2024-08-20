import * as graphql from "@nestjs/graphql";
import { TranslationRequestInput } from "../newsModule/TranslationRequestInput";
import { NewsModuleService } from "./newsmodule.service";

export class NewsModuleResolver {
  constructor(protected readonly service: NewsModuleService) {}

  @graphql.Query(() => String)
  async FetchNews(
    @graphql.Args("args")
    args: string
  ): Promise<string> {
    return this.service.FetchNews(args);
  }

  @graphql.Mutation(() => String)
  async TranslateNews(
    @graphql.Args()
    args: TranslationRequestInput
  ): Promise<string> {
    return this.service.TranslateNews(args);
  }
}
