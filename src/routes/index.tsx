import { Switch } from "react-router-dom";
import { SignIn } from "../pages/SignIn";
import { SignUp } from "../pages/SignUp";
import { Dashboard } from "../pages/Dashboard";
import { Home } from "../pages/Home";
import { Route } from "./Route";

export const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" page={Home} />
      <Route path="/signin" page={SignIn} />
      <Route path="/signup" page={SignUp} />
      <Route path="/dashboard" page={Dashboard} isPrivate />
    </Switch>
  );
};
