import { NewsArticleWhereInput } from "./NewsArticleWhereInput";
import { NewsArticleOrderByInput } from "./NewsArticleOrderByInput";

export type NewsArticleFindManyArgs = {
  where?: NewsArticleWhereInput;
  orderBy?: Array<NewsArticleOrderByInput>;
  skip?: number;
  take?: number;
};
