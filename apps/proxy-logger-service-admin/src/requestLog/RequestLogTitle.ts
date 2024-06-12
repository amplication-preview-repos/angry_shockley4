import { RequestLog as TRequestLog } from "../api/requestLog/RequestLog";

export const REQUESTLOG_TITLE_FIELD = "method";

export const RequestLogTitle = (record: TRequestLog): string => {
  return record.method?.toString() || String(record.id);
};
