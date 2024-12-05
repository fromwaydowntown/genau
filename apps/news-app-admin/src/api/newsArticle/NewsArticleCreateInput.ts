import { TranslationRequestCreateNestedManyWithoutNewsArticlesInput } from "./TranslationRequestCreateNestedManyWithoutNewsArticlesInput";

export type NewsArticleCreateInput = {
  content?: string | null;
  publishedDate?: Date | null;
  source?: string | null;
  title?: string | null;
  translationRequests?: TranslationRequestCreateNestedManyWithoutNewsArticlesInput;
};
