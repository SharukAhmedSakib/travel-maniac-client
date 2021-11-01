import logo from "./logo.svg";
import "./App.css";
import AuthProvider from "./contexts/AuthProvider";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import PrivateRoute from "./Pages/Authentication/PrivateRoute/PrivateRoute";
import Header from "./Pages/Header/Header";
import Footer from "./Pages/Footer/Footer";
import Home from "./Pages/Home/Home/Home";
import Login from "./Pages/Authentication/Login/Login";
import NotFound from "./Pages/NotFound/NotFound";
import PackageDetails from "./Pages/PackageDetails/PackageDetails";
import CreatePackage from "./Pages/CreatePackage/CreatePackage";
import AboutUs from "./Pages/AboutUs/AboutUs";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <PrivateRoute path="/createpackage">
              <CreatePackage></CreatePackage>
            </PrivateRoute>
            <PrivateRoute path="/aboutUs">
              <AboutUs></AboutUs>
            </PrivateRoute>
            <Route path="/login">
              <Login></Login>
            </Route>
            <PrivateRoute path="/packages/:packageId">
              <PackageDetails></PackageDetails>
            </PrivateRoute>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
