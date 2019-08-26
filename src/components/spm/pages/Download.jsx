import React, { Component } from "react";
import { BeatLoader } from 'react-spinners';
import PropTypes from "prop-types";

import api from "./../api";

class Download extends Component {
  state = {
    finished: true
  }
  handleClick = (e) => {
    const { urlName } = this.props.config;
    this.setState({finished: false});
    const recordingId = e.target.getAttribute("data-record-id"),
          name = e.target.getAttribute("data-file-name");
    api.getFile(urlName, recordingId).then((data) => {
      const url = URL.createObjectURL(data),
            linkEl = document.createElement("a");
      linkEl.href = url;
      linkEl.download = name;
      linkEl.click();
      this.setState({finished: true});
    }, () => this.setState({finished: true}));
  }
  render() {
    const { finished } = this.state;
    const { item } = this.props;
    return (
      <button className={`btn btn-download ${item.presentationStatus === 0 && "btn-disabled"}`} disabled={item.presentationStatus === 0} onClick={this.handleClick} data-record-id={item.id} data-file-name={item.presentationName}>
        {
          !finished ? <BeatLoader size={5} color={'white'}/> : "Download"
        }
      </button>
    )
  }
}

Download.propTypes = {
  item: PropTypes.object.isRequired
};

export default Download;
