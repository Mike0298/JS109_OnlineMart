import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

//redux
import { Provider } from "react-redux";
import store from "./redux/store";

import HomePage from "./pages/homepage/home.page";
import Checkout from "./pages/checkout/checkout.page";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/checkout" component={Checkout} />
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
