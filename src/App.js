import React, { Suspense } from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import Layout from "./components/Layout/Layout";
import LoadingSpinner from "./components/UI/LoadingSpinner";

const Home = React.lazy(() => import("./pages/Home"));
const About = React.lazy(() => import("./pages/About"));
const Products = React.lazy(() => import("./pages/Products"));
const Contact = React.lazy(() => import("./pages/Contact"));
const FaqPage = React.lazy(() => import("./pages/FaqPage"));
const DeliveryReturns = React.lazy(() => import("./pages/DeliveryReturns"));
const TermsConditions = React.lazy(() => import("./pages/TermsConditions"));
const PrivacyPolicy = React.lazy(() => import("./pages/PrivacyPolicy"));

const App = () => {
  return (
    <>
      <Layout>
        <Switch>
          <Suspense
            fallback={
              <div className="centered">
                <LoadingSpinner />
              </div>
            }
          >
            <Route path={"/"} exact>
              <Home />
            </Route>
            <Route path={"/home"} exact>
              <Redirect to="/" />
            </Route>
            <Route path="/about" exact>
              <About />
            </Route>
            <Route path="/products" exact>
              <Products />
            </Route>
            <Route path="/contact" exact>
              <Contact />
            </Route>
            <Route exact path="/frequently-asked-questions">
              <FaqPage />
            </Route>
            <Route exact path="/delivery-and-returns">
              <DeliveryReturns />
            </Route>
            <Route exact path="/privacy-policy">
              <PrivacyPolicy />
            </Route>
            <Route exact path="/terms-and-conditions">
              <TermsConditions />
            </Route>
          </Suspense>
        </Switch>
      </Layout>
    </>
  );
};

export default App;
