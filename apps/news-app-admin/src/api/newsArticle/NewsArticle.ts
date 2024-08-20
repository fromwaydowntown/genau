import { TranslationRequest } from "../translationRequest/TranslationRequest";

export type NewsArticle = {
  content: string | null;
  createdAt: Date;
  id: string;
  publishedDate: Date | null;
  source: string | null;
  title: string | null;
  translationRequests?: Array<TranslationRequest>;
  updatedAt: Date;
};
