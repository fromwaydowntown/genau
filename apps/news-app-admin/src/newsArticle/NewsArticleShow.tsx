import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { NEWSARTICLE_TITLE_FIELD } from "./NewsArticleTitle";
import { USER_TITLE_FIELD } from "../user/UserTitle";

export const NewsArticleShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="content" source="content" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="publishedDate" source="publishedDate" />
        <TextField label="source" source="source" />
        <TextField label="title" source="title" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="TranslationRequest"
          target="newsArticleId"
          label="TranslationRequests"
        >
          <Datagrid rowClick="show">
            <DateField source="createdAt" label="Created At" />
            <TextField label="ID" source="id" />
            <ReferenceField
              label="NewsArticle"
              source="newsarticle.id"
              reference="NewsArticle"
            >
              <TextField source={NEWSARTICLE_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="originalContent" source="originalContent" />
            <TextField label="status" source="status" />
            <TextField label="translatedContent" source="translatedContent" />
            <DateField source="updatedAt" label="Updated At" />
            <ReferenceField label="User" source="user.id" reference="User">
              <TextField source={USER_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
