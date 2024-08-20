import { ApiConfigWhereInput } from "./ApiConfigWhereInput";
import { ApiConfigOrderByInput } from "./ApiConfigOrderByInput";

export type ApiConfigFindManyArgs = {
  where?: ApiConfigWhereInput;
  orderBy?: Array<ApiConfigOrderByInput>;
  skip?: number;
  take?: number;
};
