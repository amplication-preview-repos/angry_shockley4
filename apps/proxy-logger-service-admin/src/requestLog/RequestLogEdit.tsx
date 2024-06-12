import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  NumberInput,
  DateTimeInput,
} from "react-admin";

export const RequestLogEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};
