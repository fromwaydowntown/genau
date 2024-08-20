import { TranslationRequest as TTranslationRequest } from "../api/translationRequest/TranslationRequest";

export const TRANSLATIONREQUEST_TITLE_FIELD = "id";

export const TranslationRequestTitle = (
  record: TTranslationRequest
): string => {
  return record.id?.toString() || String(record.id);
};
