import "./App.css";
import { Router, Route, Switch, Redirect } from "react-router-dom";
import LoginPage from "./components/LoginPage";
import Main from "./components/Main";
import history from "./history";
import PrivateRoute from "./components/PrivateRoute";

function App() {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/login">
          <LoginPage />
        </Route>
        <PrivateRoute path="/main">
          <Main />
        </PrivateRoute>
        <Route path="/">
          <Redirect to="/login" />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
