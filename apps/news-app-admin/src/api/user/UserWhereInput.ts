import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { TranslationRequestListRelationFilter } from "../translationRequest/TranslationRequestListRelationFilter";

export type UserWhereInput = {
  email?: StringNullableFilter;
  firstName?: StringNullableFilter;
  id?: StringFilter;
  lastName?: StringNullableFilter;
  translationRequests?: TranslationRequestListRelationFilter;
  username?: StringFilter;
};
