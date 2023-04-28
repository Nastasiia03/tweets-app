import { GlobalStyle } from "./components/GlobalStyles";
import { Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import { AppNav } from "./components/Navigation/Navigation";

const HomePage = lazy(() => import("./pages/Home"));
const TweetsPage = lazy(() => import("./pages/Tweets"));

export const App = () => {
  return <Suspense fallback={<b>Loading...</b>}>
    <GlobalStyle />
    <AppNav/>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/tweets" element={<TweetsPage/>} />
    </Routes>
     </Suspense>
    
};
