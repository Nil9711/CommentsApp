import "./App.css";
import CommentForm from "./CommentForm";
import CommentsList from "./CommentsList";
import NavBar from "./NavBar";
import { Route, Switch } from "react-router-dom";
import Footer from "./Footer";

function App() {
  return (
    <>
      <NavBar />
      <Switch>
        <Route exact path="/commentsForm" component={CommentForm} />
        <Route exact path="/commentsList" component={CommentsList} />
        <Route path="/" component={CommentsList} />
      </Switch>
      <Footer />
    </>
  );
}

export default App;
