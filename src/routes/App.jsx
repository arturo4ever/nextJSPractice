import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Layout from "@containers/Layout";
import Home from "@templates/Home";
import NotFound from "@templates/NotFound";
import Login from "@templates/Login";
import PasswordRecovery from "@templates/PasswordRecovery";
import NewPassword from "@templates/NewPassword";
import CreateAccount from "@templates/CreateAccount";
import MyAccount from "@templates/MyAccount";
import "@styles/global.css";
import Orders from '@templates/Orders';
import Checkout from '@templates/Checkout';
import SendEmail from "@templates/SendEmail";
import AppContext from "@context/AppContext";
import useInitialState from "@hooks/useInitialState";

const App = () => {
  const initialState = useInitialState();
  return (
    <AppContext.Provider value={initialState}>
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/sign-up" component={CreateAccount} />
          <Route exact path="/account" component={MyAccount} />
          <Route exact path="/password-recovery" component={PasswordRecovery} />
          <Route exact path="/new-password" component={NewPassword} />
          <Route exact path="/orders" component={Orders} />
          <Route exact path="/checkout" component={Checkout} />
          <Route exact path="/send-email" component={SendEmail} />
          <Route path="*" component={NotFound} />
        </Switch>
      </Layout>
    </BrowserRouter>
    </AppContext.Provider>
  );
};

export default App;
