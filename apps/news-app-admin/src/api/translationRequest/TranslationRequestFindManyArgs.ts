import { TranslationRequestWhereInput } from "./TranslationRequestWhereInput";
import { TranslationRequestOrderByInput } from "./TranslationRequestOrderByInput";

export type TranslationRequestFindManyArgs = {
  where?: TranslationRequestWhereInput;
  orderBy?: Array<TranslationRequestOrderByInput>;
  skip?: number;
  take?: number;
};
