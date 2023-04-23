import { GlobalStyle } from "./GlobalStyles";
import { Layout } from "./Layout";
import { UserCard } from "./UserCard/UserCard";

export const App = () => {
  return <Layout>
  <GlobalStyle/>
      <UserCard/>
    </Layout>
};
