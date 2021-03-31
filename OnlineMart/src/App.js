import "./App.css";

//redux
import { Provider } from "react-redux";
import store from "./redux/store";

import HomePage from "./pages/homepage/home.page";

function App() {
  return (
    <div>
      <Provider store={store}>
        <HomePage />
      </Provider>
    </div>
  );
}

export default App;
