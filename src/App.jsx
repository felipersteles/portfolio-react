import GlobalStyle from "./globalStyles";
import { ThemeProvider } from "styled-components";
import { temaClaro } from "./components/Themes";
import { Route, Switch, useLocation } from "react-router";
import { lazy, Suspense } from "react";
import { AnimatePresence } from "framer-motion";
import Loading from "./subComponents/Loading";

// Componentes
const Main = lazy(() => import("./components/Main"));
const AboutPage = lazy(() => import("./components/AboutPage"));
const BlogPage = lazy(() => import("./components/BlogPage"));
const DeployPage = lazy(() => import("./components/DeployPage/DeployPage"));
const MySkillsPage = lazy(() => import("./components/MySkillsPage"));
const SoundBar = lazy(() => import("./subComponents/SoundBar"));

const App = () => {
  const location = useLocation();

  return (
    <>
      <GlobalStyle />

      <ThemeProvider theme={temaClaro}>
        <Suspense fallback={<Loading />}>
          <SoundBar />

          <AnimatePresence exitBeforeEnter>
            <Switch location={location} key={location.pathname}>
              <Route exact path="/" component={Main} />
              <Route exact path="/sobre" component={AboutPage} />
              <Route exact path="/certificados" component={BlogPage} />
              <Route exact path="/trabalhos" component={DeployPage} />
              <Route exact path="/habilidades" component={MySkillsPage} />
            </Switch>
          </AnimatePresence>
        </Suspense>
      </ThemeProvider>
    </>
  );
}

export default App;
