import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
  TextInput,
} from "react-admin";
import { NewsArticleTitle } from "../newsArticle/NewsArticleTitle";
import { UserTitle } from "../user/UserTitle";

export const TranslationRequestCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput
          source="newsArticle.id"
          reference="NewsArticle"
          label="NewsArticle"
        >
          <SelectInput optionText={NewsArticleTitle} />
        </ReferenceInput>
        <TextInput label="originalContent" multiline source="originalContent" />
        <SelectInput
          source="status"
          label="status"
          choices={[{ label: "Option 1", value: "Option1" }]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <TextInput
          label="translatedContent"
          multiline
          source="translatedContent"
        />
        <ReferenceInput source="user.id" reference="User" label="User">
          <SelectInput optionText={UserTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
