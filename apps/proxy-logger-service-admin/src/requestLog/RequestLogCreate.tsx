import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  NumberInput,
  DateTimeInput,
} from "react-admin";

export const RequestLogCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <div />
        <div />
        <TextInput label="method" source="method" />
        <div />
        <NumberInput
          step={1}
          label="responseStatusCode"
          source="responseStatusCode"
        />
        <DateTimeInput label="timestamp" source="timestamp" />
        <TextInput label="url" source="url" />
      </SimpleForm>
    </Create>
  );
};
