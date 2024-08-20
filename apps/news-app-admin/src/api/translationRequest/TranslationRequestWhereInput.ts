import { StringFilter } from "../../util/StringFilter";
import { NewsArticleWhereUniqueInput } from "../newsArticle/NewsArticleWhereUniqueInput";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type TranslationRequestWhereInput = {
  id?: StringFilter;
  newsArticle?: NewsArticleWhereUniqueInput;
  originalContent?: StringNullableFilter;
  status?: "Option1";
  translatedContent?: StringNullableFilter;
  user?: UserWhereUniqueInput;
};
