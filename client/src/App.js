import "./App.css";
import { Router } from "@reach/router";
import Main from "./views/Main";
import Add from "./views/Add";
import One from "./views/One";
import Update from "./views/Update";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <h1>Belt exam2!</h1>
      <Router>
        <Main path="/" />
        <Add path="/pet/create" />
        <One path="/pet/:_id" />
        <Update path="/pet/update/:_id" />
      </Router>
    </div>
  );
}

export default App;
