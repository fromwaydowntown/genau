import { ApiConfig as TApiConfig } from "../api/apiConfig/ApiConfig";

export const APICONFIG_TITLE_FIELD = "name";

export const ApiConfigTitle = (record: TApiConfig): string => {
  return record.name?.toString() || String(record.id);
};
