import React from "react";
import store from "./store";
import Logo from "./logo.png";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Link } from "react-router-dom";
import HomeScreen from "./screens/HomeScreen";
import AdminScreen from "./screens/AdminScreen";

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div className="grid-container">
            <header>
              <img src={Logo} alt="app logo" />
              <Link to="/">TIMGOLZ SHOPPING CART</Link>
              <Link to="/admin">Admin</Link>
            </header>
            <main>
              <Route path="/admin" component={AdminScreen} />
              <Route path="/" component={HomeScreen} exact />
            </main>
            <footer>All rights reserved.</footer>
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;