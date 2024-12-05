import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { TranslationRequestList } from "./translationRequest/TranslationRequestList";
import { TranslationRequestCreate } from "./translationRequest/TranslationRequestCreate";
import { TranslationRequestEdit } from "./translationRequest/TranslationRequestEdit";
import { TranslationRequestShow } from "./translationRequest/TranslationRequestShow";
import { NewsArticleList } from "./newsArticle/NewsArticleList";
import { NewsArticleCreate } from "./newsArticle/NewsArticleCreate";
import { NewsArticleEdit } from "./newsArticle/NewsArticleEdit";
import { NewsArticleShow } from "./newsArticle/NewsArticleShow";
import { ApiConfigList } from "./apiConfig/ApiConfigList";
import { ApiConfigCreate } from "./apiConfig/ApiConfigCreate";
import { ApiConfigEdit } from "./apiConfig/ApiConfigEdit";
import { ApiConfigShow } from "./apiConfig/ApiConfigShow";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
import { httpAuthProvider } from "./auth-provider/ra-auth-http";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"NewsApp"}
        dataProvider={dataProvider}
        authProvider={httpAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="TranslationRequest"
          list={TranslationRequestList}
          edit={TranslationRequestEdit}
          create={TranslationRequestCreate}
          show={TranslationRequestShow}
        />
        <Resource
          name="NewsArticle"
          list={NewsArticleList}
          edit={NewsArticleEdit}
          create={NewsArticleCreate}
          show={NewsArticleShow}
        />
        <Resource
          name="ApiConfig"
          list={ApiConfigList}
          edit={ApiConfigEdit}
          create={ApiConfigCreate}
          show={ApiConfigShow}
        />
        <Resource
          name="User"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          show={UserShow}
        />
      </Admin>
    </div>
  );
};

export default App;
