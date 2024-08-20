import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { TranslationRequestListRelationFilter } from "../translationRequest/TranslationRequestListRelationFilter";

export type NewsArticleWhereInput = {
  content?: StringNullableFilter;
  id?: StringFilter;
  publishedDate?: DateTimeNullableFilter;
  source?: StringNullableFilter;
  title?: StringNullableFilter;
  translationRequests?: TranslationRequestListRelationFilter;
};
