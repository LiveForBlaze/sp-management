import React, { Component } from "react";
import PropTypes from "prop-types";
import moment from "moment";

import api from "./../api";
import { Header, SubHeader, Search, Main, CopyrightFooter } from "../styles/user-interface";

class UserInterface extends Component {
  state = {
    date: ""
  }
  componentDidMount() {
    const { urlName } = this.props.config;
    api.getEventData(urlName, this.props.config.event).then((event) => {
      this.setState({date: event.startDate})
    }).then(() => {
      this.timeLeft = setInterval(() => {
        const distance = moment(this.state.date).diff();
        this.setState({left: distance > 0 ? moment.duration(distance, "milliseconds").format("d[d <br/>] h[h] m[m] s[s]") : "Expired"});
      }, 1000);
    });
  }
  componentWillUnmount() {
    clearInterval(this.timeLeft);
  }
  render() {
    const { logout, search, config, logo} = this.props;
    const { primaryColor, borderRadius, UserInterfaceSubHeaderFontSize, UserInterfaceSubHeaderFontWeight, SearchPlaceholder, headerSize, TimerFontSize } = config;
    return (
      <div className="spm-container">
        <Header color={primaryColor} size={headerSize}>
          <div>{config.logoMain && <img src={logo} className="user-interface-logo" alt={`${config.companyName} logo`}/>}</div>
          <div className="UserInterface-header-title">Presentation Management</div>
          <div><button className="btn user-interface-btn" onClick={logout}>Log Out</button></div>
        </Header>
        <SubHeader color={primaryColor} size={TimerFontSize} borderRadius={borderRadius} headerSize={UserInterfaceSubHeaderFontSize} headerWeight={UserInterfaceSubHeaderFontWeight}>
          <div className="account-page-header_container">
            <h1>{config.conferenceName ? config.conferenceName : `${config.companyName} Sessions`}</h1>
            <div className="countdown" id="countdown" dangerouslySetInnerHTML={{__html: this.state.left}}></div>
          </div>
        </SubHeader>
        <Main className="account-page-body">
          { search &&
            <Search color={primaryColor}>
              <input type="text" onChange={this.props.handleSearch} placeholder={SearchPlaceholder} className="search-input"/>
              <div className="search-icon" />
            </Search>
          }
          { this.props.children }
        </Main>
        <CopyrightFooter color={primaryColor} borderRadius={borderRadius}>2019 © Powered by SlideSpiel.com</CopyrightFooter>
      </div>
    );
  }
};

UserInterface.propTypes = {
  handleSearch: PropTypes.func.isRequired,
  logout: PropTypes.func.isRequired,
  search: PropTypes.bool.isRequired
};

export default UserInterface;
