import { InputJsonValue } from "../../types";
import { TranslationRequestUpdateManyWithoutUsersInput } from "./TranslationRequestUpdateManyWithoutUsersInput";

export type UserUpdateInput = {
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  password?: string;
  roles?: InputJsonValue;
  translationRequests?: TranslationRequestUpdateManyWithoutUsersInput;
  username?: string;
};
