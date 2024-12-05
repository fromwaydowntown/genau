import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const ApiConfigCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="apiKey" source="apiKey" />
        <TextInput label="baseUrl" source="baseUrl" />
        <TextInput label="endpoint" source="endpoint" />
        <TextInput label="name" source="name" />
      </SimpleForm>
    </Create>
  );
};
