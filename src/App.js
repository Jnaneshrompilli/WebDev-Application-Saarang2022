import Header from "./components/Header";
import RegisterForm from "./components/RegisterForm";
import NavBar from "./components/NavBar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Profile from "./components/Profile";

function App() {
  return (
    <Router>
      <div>
        <Route path="/profile" component={Profile} />
        <Route
          path="/"
          exact
          render={() => (
            <div>
              <NavBar />
              <div className="container">
                <Header />
                <RegisterForm />
              </div>
            </div>
          )}
        />
      </div>
    </Router>
  );
}

export default App;
