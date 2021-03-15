import './App.css';
import {BrowserRouter as Router,Route,Switch} from "react-router-dom"
import Loginpage from "./Container/LoginPage";
import Homepage from "./Container/AdminPage"
import SalePage from "./Container/SalePage";

function App() {
    const isLogged = localStorage.getItem("isLogged")
    const loginby = localStorage.getItem("loginby")
  return (
    <div>
      <Router>
        <Switch>
          <Route path={"/adminpage"}>
              {isLogged === "true" && loginby ==="admin" ? <Homepage /> : isLogged ==="true" && loginby === "sale" ? <SalePage /> : <Loginpage />}
          </Route>
            <Route exact path={"/"}>
                {isLogged === "true" && loginby ==="admin" ? <Homepage /> : isLogged ==="true" && loginby === "sale" ? <SalePage /> : <Loginpage />}
            </Route>
            <Route path={"/salepage"}>
                {isLogged === "true" && loginby ==="admin" ? <Homepage /> : isLogged === "true" && loginby === "sale" ? <SalePage /> : <Loginpage />}
            </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
