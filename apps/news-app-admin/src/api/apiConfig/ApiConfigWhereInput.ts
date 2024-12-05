import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type ApiConfigWhereInput = {
  apiKey?: StringNullableFilter;
  baseUrl?: StringNullableFilter;
  endpoint?: StringNullableFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
};
