import React, { Component } from "react";
import { inject } from "mobx-react";
import { BeatLoader } from 'react-spinners';
import { withRouter } from "react-router-dom";

import AccountPage from '../../spm/pages/AccountPage';
import AdminPage from '../../spm/pages/AdminPage';
import LoginPage from '../../spm/pages/LoginPage';
import config from "./config";
import Logo from "./../../../assets/images/logo.png";

class HomePage extends Component {

  render() {
    const { isLoggedIn, isLoggingIn, currentUser } = this.props,
          admin = RegExp("\\badmin\\b").test(this.props.location.pathname);
    if (isLoggedIn) {
      return (
        <div>
          {
            currentUser && (
              currentUser.role === "admin" ? (
                <AdminPage config={config} logo={Logo} />
              ) : (
                currentUser.role === "staff" ? <AdminPage config={config} logo={Logo} /> : <AccountPage config={config} logo={Logo}/>
              )
            )
          }
        </div>
      )
    } else if (isLoggingIn) {
      return (
        <div className="container">
          <div className="container-table">
            <BeatLoader size={15} color={config.loaderColor}/>
          </div>
        </div>
      );
    } else {
      return (
        <LoginPage admin={admin} config={config} logo={Logo} />
      );
    }
  }
};


export default inject(({store}, props) => ({
  currentUser: store.currentUser,
  isLoggedIn: store.isLoggedIn,
  isLoggingIn: store.isLoggingIn
}))(withRouter(HomePage));
