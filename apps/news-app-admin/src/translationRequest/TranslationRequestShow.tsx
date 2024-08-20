import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceField,
} from "react-admin";
import { NEWSARTICLE_TITLE_FIELD } from "../newsArticle/NewsArticleTitle";
import { USER_TITLE_FIELD } from "../user/UserTitle";

export const TranslationRequestShow = (
  props: ShowProps
): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
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
      </SimpleShowLayout>
    </Show>
  );
};
