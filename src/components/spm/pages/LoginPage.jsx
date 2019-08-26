import React, { PureComponent } from "react";
import { inject } from "mobx-react";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";

import api from "./../api";
import { BeatLoader } from 'react-spinners';
import { Login, LoginButtonBox } from "../styles/login";

class LoginPage extends PureComponent {
  state = {
    email: null,
    password: "empty"
  }

  handleChange = (e) => {
    const name = e.target.getAttribute('name'),
          value = e.target.value;
    this.setState({
      [name]: value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();

    const associationId = this.props.config["associationId"],
          { email, password } = this.state,
          { urlName } = this.props.config;

    api.logIn(urlName, associationId, email, password).then((userData) => {
      this.props.store.setUser(userData);
      this.props.history.push(`/${this.props.config.linkName}/presentations`);
    }, (error) => {
      alert(error);
    });
  }

  render() {
    const { admin, config, logo } = this.props;
    const { loginPasswordProtected, loginHintText, companyName, primaryColor, loginFormVerticalPozition, loginBoxHeaderHorizontalAlign, borderRadius, fontSize, loginPlaceholder } = config;
    const { loading } = this.state;
    if(loading) {
      return (
        <div className="container">
          <div className="container-table">
            <BeatLoader size={15} color={config.loaderColor}/>
          </div>
        </div>
      )
    }
    return (
      <div className="container">
        <Login color={primaryColor} size={fontSize} vertical={loginFormVerticalPozition} horizontal={loginBoxHeaderHorizontalAlign}>
          <div>
            {config.logo && <img src={logo} className="container-table-logo" alt={`${companyName} logo`}/>}
            <form className="login-box" onSubmit={this.handleSubmit}>
              <h2>{companyName} Presentation Management</h2>
              <div className="login-box_hint">{!admin && loginHintText}</div>
              <input type="text" className={`form-control ${(loginPasswordProtected || admin) && "login-box-input-bottomless"}`} placeholder={loginPlaceholder} name="email" onChange={this.handleChange} ></input>
              {(loginPasswordProtected || admin) && <input type="password" className="form-control" placeholder="Password" name="password" onChange={this.handleChange}></input>}
              <LoginButtonBox color={primaryColor} borderRadius={borderRadius}>
                <div>Support: <a href="mailto:info@penxy.com">info@penxy.com</a></div>
                <button type="submit">Log In</button>
              </LoginButtonBox>
            </form>
          </div>
        </Login>
      </div>
    );
  }
};

LoginPage.propTypes = {
  admin: PropTypes.bool.isRequired
};

export default  withRouter(inject("store")(LoginPage));
