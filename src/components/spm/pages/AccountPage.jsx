import React, { Component } from "react";
import { inject } from "mobx-react";
import moment from "moment";

import api from "./../api";

import UserInterface from "./UserInterface";
import SessionModal from "./SessionModal";
import { Account } from "../styles/account-admin"

class AccountPage extends Component {
  state = {
    data: [],
    user: "",
    files: [],
    uploading: false,
    uploaded: 100,
    showModal: false,
    status: "",
    session: "",
    filtered: [],
    waitingUploadResponse: ""
  }
  componentDidMount() {
    const { urlName } = this.props.config;
    api.getUser(urlName).then((user) => {
      this.setState({user})
    });

    this.getData();
  }

  uploadFile = (e) => {
    const { urlName } = this.props.config;
    let file = e.target.files[0],
        sessionId = e.target.getAttribute("sessionid");
    this.setState({uploading: true})
    if (file.size > 2147483648) {
      alert('File is too big');
      return this.setState({uploading: false});
    }
    api.sendFile(urlName, sessionId, file).uploadProgress((e) => {
      const percentage = Math.floor((e.loaded / e.total ) * 100);
      this.setState({uploaded: percentage});
      if(percentage === 100) {
        this.setState({waitingUploadResponse: true})
      }
    }).then((data) => {
      this.setState({uploading: false, showModal: false, waitingUploadResponse: false});
      this.updateData(data.id);
    }, (error) => {
      this.setState({uploading: false, waitingUploadResponse: false});
    });
  }

  getData = () => {
    const { urlName, event } = this.props.config;
    api.getTracks(urlName, event).then((data) => {
      this.setState({data, filtered: data});
    });
  }
  getDownloadLinks = (e) => {
    const { urlName } = this.props.config;
    const recordingId = e.target.getAttribute("data-record-id"),
          name = e.target.textContent;
    api.getFile(urlName, recordingId).then((data) => {
      const url = URL.createObjectURL(data),
            linkEl = document.createElement("a");
      linkEl.href = url;
      linkEl.download = name;
      linkEl.click();
    }, (error) => console.log(error));
  }

  handleLogout = () => {
    this.props.store.logOut(null);
    localStorage.setItem(`${this.props.config.urlName}-access_token`, null);
  }

  handleGetStatus = (status) => {
    switch (status) {
      case 0:
        return "No file";
      case 1:
        if(this.props.config.simpleAdminPage) {
          return "File Uploaded"
        }
        return "Under Review";
      case 2:
        return "Approved";
      case 3:
        return "Declined";
      case 4:
        return this.props.config.simpleAdminPage ? "File Uploaded" : "Approved";
      default:
        return "unknown";
    }
  }

  handleShow = (status) => {
    const { config } = this.props;
    let result = "";
    switch (status.presentationStatus) {
      case 0:
        result = "No presentation file is submitted";
        break;
      case 1:
        result = `Presentation file is under review by ${config.companyName}`;
        break;
      case 2:
        result = `Presentation file is approved by ${config.companyName}`;
        break;
      case 3:
        result = `Presentation file is declined by ${config.companyName}`;
        break;
      case 4:
        result = this.props.config.simpleAdminPage ? `Presentation file is under review by ${config.companyName}` : `Presentation file is approved by ${config.companyName}`;
        break;
      default:
        result = "unknown";
    }
    this.setState({header: result, status: status.presentationStatus, session: status, showModal: true});
  }
  handleClose = () => {
    this.setState({showModal: false});
  }
  handleSearch = (e) => {
    const { data } = this.state;
    let filtered = [];
    if (e.target.value !== "") {
      data.forEach((item, i) => {
        const speakerList = item.speakers.map((speaker) => speaker.speaker.firstName + " " + speaker.speaker.lastName ).join(" ").toLowerCase(),
              title = item.title.toLowerCase();
        if ((speakerList.indexOf(e.target.value.toLowerCase()) !== -1) || (title.indexOf(e.target.value.toLowerCase()) !== -1)) {
          filtered.push(item);
        }
      });
    } else {
      filtered = data;
    }
    this.setState({filtered});
  }
  render() {
    const { filtered, showModal, header, uploading, waitingUploadResponse, uploaded, status, session } = this.state;
    const { config, logo } = this.props;
    const { mainPartBottomText, MainTextColor, PresentationStatusDeclined, PresentationStatusApproved, primaryColor, simpleAdminPage } = config;
    return (
      <UserInterface config={config} logo={logo} logout={this.handleLogout} uploaded={uploaded} search={config.sessionSearch} handleSearch={this.handleSearch}>
        {
          filtered.map((item, index) => {
            const formatedDate = moment(item.startTime).format("ddd, MMM DD");
            const formatedTime = moment(item.startTime).format("HH:mm");
            return (
              <Account color={primaryColor} simpleAdminPage={simpleAdminPage} textColor={MainTextColor} colorDecline={PresentationStatusDeclined} colorApprove={PresentationStatusApproved} key={item.id} className="account-item" onClick={this.handleShow.bind(this, item)}>
                <div className="account-item-date"><div>{formatedTime}</div>{formatedDate}</div>
                <div>
                  {item.title}<br/>
                  <div className="account-item_speakers">
                      {
                        item.speakers.map((speak, index) => {
                          return (
                            <div key={index}>{speak.speaker.firstName} {speak.speaker.lastName}</div>
                          )
                        })
                      }
                  </div>
                </div>
                <div className={`account-item-status-${item.presentationStatus}`}>{this.handleGetStatus(item.presentationStatus)}</div>
              </Account>
            )
          })
        }

        { showModal && <SessionModal config={config} header={header} uploading={uploading} waitingUploadResponse={waitingUploadResponse} uploaded={uploaded} session={session} status={status} handleUpload={this.uploadFile} handleClose={this.handleClose} /> }
        <div className="account-item no-border">
          {mainPartBottomText}
        </div>
      </UserInterface>
    );
  }
};

export default inject("store")(AccountPage);
