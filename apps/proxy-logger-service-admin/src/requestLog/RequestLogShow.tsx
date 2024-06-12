import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
} from "react-admin";

export const RequestLogShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
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
      </SimpleShowLayout>
    </Show>
  );
};
