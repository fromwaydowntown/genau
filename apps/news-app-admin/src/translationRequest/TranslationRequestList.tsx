import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  DateField,
  TextField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { NEWSARTICLE_TITLE_FIELD } from "../newsArticle/NewsArticleTitle";
import { USER_TITLE_FIELD } from "../user/UserTitle";

export const TranslationRequestList = (
  props: ListProps
): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"TranslationRequests"}
      perPage={50}
      pagination={<Pagination />}
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
    </List>
  );
};
