import { SortOrder } from "../../util/SortOrder";

export type TranslationRequestOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  newsArticleId?: SortOrder;
  originalContent?: SortOrder;
  status?: SortOrder;
  translatedContent?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
};
