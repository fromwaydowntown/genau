import { NewsArticleWhereUniqueInput } from "../newsArticle/NewsArticleWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type TranslationRequestCreateInput = {
  newsArticle?: NewsArticleWhereUniqueInput | null;
  originalContent?: string | null;
  status?: "Option1" | null;
  translatedContent?: string | null;
  user?: UserWhereUniqueInput | null;
};
