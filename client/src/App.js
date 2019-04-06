import React from "react";
import Home from "./components/Home";
import NoMatch from "./components/NoMatch";
import Navbar from "./components/Navbar";
import Login from "./components/Login";
import Register from "./components/Register";
import FetchUser from "./components/FetchUser";
import VideoShow from "./components/VideoShow";
import ProtectedRoute from "./components/ProtectedRoute";
import { Switch, Route } from "react-router-dom";
import { Container } from "semantic-ui-react";
import HomeAndIndexContainer from "./components/HomeAndIndexContainer";

const App = () => (
  <>
    <Navbar />
    <FetchUser>
      <Container>
        <Switch>
          <ProtectedRoute exact path="/" component={HomeAndIndexContainer} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/videos/:id" component={VideoShow} />
          <Route component={NoMatch} />
        </Switch>
      </Container>
    </FetchUser>
  </>
);

export default App;
