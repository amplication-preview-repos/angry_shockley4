import { SortOrder } from "../../util/SortOrder";

export type RequestLogOrderByInput = {
  body?: SortOrder;
  createdAt?: SortOrder;
  headers?: SortOrder;
  id?: SortOrder;
  method?: SortOrder;
  responseBody?: SortOrder;
  responseStatusCode?: SortOrder;
  timestamp?: SortOrder;
  updatedAt?: SortOrder;
  url?: SortOrder;
};
