import { TranslationRequestUpdateManyWithoutNewsArticlesInput } from "./TranslationRequestUpdateManyWithoutNewsArticlesInput";

export type NewsArticleUpdateInput = {
  content?: string | null;
  publishedDate?: Date | null;
  source?: string | null;
  title?: string | null;
  translationRequests?: TranslationRequestUpdateManyWithoutNewsArticlesInput;
};
