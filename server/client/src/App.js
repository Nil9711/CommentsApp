import "./App.css";
import CommentsList from "./CommentsList";
import NavBar from "./NavBar";
import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <>
      <NavBar />
      <Switch>
        <Route exact path="/commentsList" component={CommentsList} />
        <Route path="/" component={CommentsList} />
      </Switch>
      {/* <Footer /> */}
    </>
  );
}

export default App;
