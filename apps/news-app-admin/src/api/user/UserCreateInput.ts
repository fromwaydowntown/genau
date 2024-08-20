import { InputJsonValue } from "../../types";
import { TranslationRequestCreateNestedManyWithoutUsersInput } from "./TranslationRequestCreateNestedManyWithoutUsersInput";

export type UserCreateInput = {
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  password: string;
  roles: InputJsonValue;
  translationRequests?: TranslationRequestCreateNestedManyWithoutUsersInput;
  username: string;
};
