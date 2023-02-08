import CourseContent from "./pages/CourseContent";
import InstructorPage from "./pages/InstructorPage";
import Features from "./pages/Features";
import Home from "./pages/Home";
import About from "./pages/About";
import Register from "./pages/Register";
import SContent from "./pages/SContent";
import Signin from "./pages/Signin";
import { Route, Switch, Redirect } from "react-router-dom";
import { Fragment } from "react";

function App() {
  return (
    <Fragment>
      <Switch className="app">
        <Route path="/" exact>
          <Redirect to="/home" />
        </Route>
        <Route path="/home" exact>
          <Home />
        </Route>
        <Route path="/about" exact>
          <About />
        </Route>
        <Route path="/features" exact>
          <Features />
        </Route>
        <Route path="/course">
          <CourseContent />
        </Route>
        <Route path="/scontent">
          <SContent />
        </Route>
        <Route path="/register">
          <Register />
        </Route>
        <Route path="/signin">
          <Signin />
        </Route>
        <Route path="/instructorpage">
          <InstructorPage />
        </Route>
      </Switch>
    </Fragment>
  );
}

export default App;
