import { InputJsonValue } from "../../types";

export type RequestLogUpdateInput = {
  body?: InputJsonValue;
  headers?: InputJsonValue;
  method?: string | null;
  responseBody?: InputJsonValue;
  responseStatusCode?: number | null;
  timestamp?: Date | null;
  url?: string | null;
};
