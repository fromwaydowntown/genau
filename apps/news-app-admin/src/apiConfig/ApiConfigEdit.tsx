import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const ApiConfigEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="apiKey" source="apiKey" />
        <TextInput label="baseUrl" source="baseUrl" />
        <TextInput label="endpoint" source="endpoint" />
        <TextInput label="name" source="name" />
      </SimpleForm>
    </Edit>
  );
};
