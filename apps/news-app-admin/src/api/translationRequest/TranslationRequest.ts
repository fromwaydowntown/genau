import { NewsArticle } from "../newsArticle/NewsArticle";
import { User } from "../user/User";

export type TranslationRequest = {
  createdAt: Date;
  id: string;
  newsArticle?: NewsArticle | null;
  originalContent: string | null;
  status?: "Option1" | null;
  translatedContent: string | null;
  updatedAt: Date;
  user?: User | null;
};
