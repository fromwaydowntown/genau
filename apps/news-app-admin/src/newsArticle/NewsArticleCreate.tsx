import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  DateTimeInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { TranslationRequestTitle } from "../translationRequest/TranslationRequestTitle";

export const NewsArticleCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="content" multiline source="content" />
        <DateTimeInput label="publishedDate" source="publishedDate" />
        <TextInput label="source" source="source" />
        <TextInput label="title" source="title" />
        <ReferenceArrayInput
          source="translationRequests"
          reference="TranslationRequest"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={TranslationRequestTitle} />
        </ReferenceArrayInput>
      </SimpleForm>
    </Create>
  );
};
