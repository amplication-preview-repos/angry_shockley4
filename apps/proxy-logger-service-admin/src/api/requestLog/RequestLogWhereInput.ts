import { JsonFilter } from "../../util/JsonFilter";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";

export type RequestLogWhereInput = {
  body?: JsonFilter;
  headers?: JsonFilter;
  id?: StringFilter;
  method?: StringNullableFilter;
  responseBody?: JsonFilter;
  responseStatusCode?: IntNullableFilter;
  timestamp?: DateTimeNullableFilter;
  url?: StringNullableFilter;
};
