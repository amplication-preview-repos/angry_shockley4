import { JsonValue } from "type-fest";

export type RequestLog = {
  body: JsonValue;
  createdAt: Date;
  headers: JsonValue;
  id: string;
  method: string | null;
  responseBody: JsonValue;
  responseStatusCode: number | null;
  timestamp: Date | null;
  updatedAt: Date;
  url: string | null;
};
