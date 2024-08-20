import { NewsArticle as TNewsArticle } from "../api/newsArticle/NewsArticle";

export const NEWSARTICLE_TITLE_FIELD = "title";

export const NewsArticleTitle = (record: TNewsArticle): string => {
  return record.title?.toString() || String(record.id);
};
