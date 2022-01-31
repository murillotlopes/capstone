import { Switch } from "react-router-dom";
import { SignIn } from "../pages/SignIn";
import { SignUp } from "../pages/SignUp";
import { Dashboard } from "../pages/Dashboard";
import { Home } from "../pages/Home";
import { Route } from "./Route";
import { RecipePage } from "../pages/RecipePage";
import { MatchFood } from "../pages/MatchFood";
import { FeedPage } from "../pages/Feed";
import { TeamPage } from "../pages/Team";

export const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" page={Home} />
      <Route path="/signin" page={SignIn} />
      <Route path="/signup" page={SignUp} />
      <Route path="/dashboard" page={Dashboard} isPrivate />
      <Route path="/recipe" page={RecipePage} isPrivate />
      <Route path="/explore" page={MatchFood} isPrivate />
      <Route path="/feed" page={FeedPage} isPrivate />
      <Route path="/team" page={TeamPage} />
    </Switch>
  );
};
