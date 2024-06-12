import * as React from "react";
import { List, Datagrid, ListProps, TextField, DateField } from "react-admin";
import Pagination from "../Components/Pagination";

export const RequestLogList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"RequestLogs"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="body" source="body" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="headers" source="headers" />
        <TextField label="ID" source="id" />
        <TextField label="method" source="method" />
        <TextField label="responseBody" source="responseBody" />
        <TextField label="responseStatusCode" source="responseStatusCode" />
        <TextField label="timestamp" source="timestamp" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="url" source="url" />
      </Datagrid>
    </List>
  );
};
