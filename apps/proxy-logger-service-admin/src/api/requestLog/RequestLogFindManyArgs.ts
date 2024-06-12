import { RequestLogWhereInput } from "./RequestLogWhereInput";
import { RequestLogOrderByInput } from "./RequestLogOrderByInput";

export type RequestLogFindManyArgs = {
  where?: RequestLogWhereInput;
  orderBy?: Array<RequestLogOrderByInput>;
  skip?: number;
  take?: number;
};
