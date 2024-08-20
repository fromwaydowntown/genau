import { JsonValue } from "type-fest";
import { TranslationRequest } from "../translationRequest/TranslationRequest";

export type User = {
  createdAt: Date;
  email: string | null;
  firstName: string | null;
  id: string;
  lastName: string | null;
  roles: JsonValue;
  translationRequests?: Array<TranslationRequest>;
  updatedAt: Date;
  username: string;
};
