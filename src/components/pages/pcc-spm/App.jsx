import React, { PureComponent } from "react";
import { Provider } from "mobx-react";

import HomePage from "./HomePage";
import configureStore from "../../spm/store/appStore";
import api from "../../spm/api";
import config from "./config";
import "../../spm/styles/index.scss"

const store = configureStore();

class App extends PureComponent {
  componentDidMount() {
    store.setIsLoggingIn(true);
    api.restoreUser(config.urlName).then((userData) => {
      store.setUser(userData);
    }, () => {
      store.setIsLoggingIn(false);
    });
  }

  render() {
    return (
      <Provider store={store}>
        <div className="spm">
          <HomePage />
        </div>
      </Provider>
    );
  }
};

export default App;
