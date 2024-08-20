import { Injectable } from "@nestjs/common";
import { TranslationRequestInput } from "../newsModule/TranslationRequestInput";

@Injectable()
export class NewsModuleService {
  constructor() {}
  async FetchNews(args: string): Promise<string> {
    throw new Error("Not implemented");
  }
  async TranslateNews(args: TranslationRequestInput): Promise<string> {
    throw new Error("Not implemented");
  }
}
