import { SortOrder } from "../../util/SortOrder";

export type NewsArticleOrderByInput = {
  content?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  publishedDate?: SortOrder;
  source?: SortOrder;
  title?: SortOrder;
  updatedAt?: SortOrder;
};
