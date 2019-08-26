import React, { Component, Fragment } from "react";
import { inject } from "mobx-react";
import moment from "moment";

import { getFileSizeName } from "../helpers/fileSize";
import { Admin } from "../styles/account-admin";
import api from "./../api";
import UserInterface from "./UserInterface";
import SessionModal from "./SessionModal";
import Download from "./Download";


class AdminPage extends Component {
  state = {
    data: [],
    user: "",
    files: [],
    filtered: [],
    showModal: false,
    header: "",
    session: "",
    waitingUploadResponse: false
  }
  componentDidMount() {
    const { urlName } = this.props.config;
    api.getUser(urlName).then((user) => {
      this.setState({user})
    }, () => {
      this.setState({isFetching: false});
    });
    this.getData();
  }

  handleLogout = () => {
    this.props.store.logOut(null);
    localStorage.setItem(`${this.props.config.urlName}-access_token`, null);
  }

  handleApprove = (e) => {
    const { urlName } = this.props.config,
          recordingId = e.target.getAttribute("id");
    api.sessionApprove(urlName, recordingId).then((user) => {
      this.getData();
    });
  }

  handleDecline = (e) => {
    const { urlName } = this.props.config,
          recordingId = e.target.getAttribute("id");
    api.sessionDecline(urlName, recordingId).then((user) => {
      this.getData();
    });
  }

  handlePush = (e) => {
    const { urlName } = this.props.config,
          recordingId = e.target.getAttribute("id");
    api.sessionPush(urlName, recordingId).then((user) => {
      this.updateData(recordingId);
    }, (er) => console.log(er));
  }

  getData = () => {
    const { urlName, event } = this.props.config;
    api.getAllSessions(urlName, event).then((data) => {
      this.setState({data, filtered: data});
    });
  }

  updateData = (id) => {
    const { urlName, event } = this.props.config;
    api.getAllSessions(urlName, event).then((data) => {
        let newFiltered = [...this.state.filtered];
        data.forEach(item => {
            if(item.id === id) {
              const position = newFiltered.map(rec => rec.id).indexOf(item.id);
              if(position !== -1) { newFiltered[position] = item; }
            }
        });
        this.setState({data, filtered: newFiltered});
    });
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
  handleShow = (status) => {
    const { companyName } = this.props.config;
    let result = "";
    switch (status.presentationStatus) {
      case 0:
        result = "No presentation file is submitted";
        break;
      case 1:
        result = `Presentation file is under review by ${companyName}`;
        break;
      case 2:
        result = `Presentation file is approved by ${companyName}`;
        break;
      case 3:
        result = `Presentation file is declined by ${companyName}`;
        break;
      case 4:
        result = "Pushed for recording";
        break;
      default:
        result = "unknown";
    }
    this.setState({header: result, status: status.presentationStatus, session: status, showModal: true});
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
  handleClose = () => {
    this.setState({showModal: false});
  }
  render() {
    const { filtered, user, showModal, uploading, waitingUploadResponse, uploaded, status, header, session } = this.state,
          { config, logo } = this.props,
          { MainTextColor, primaryColor, AdminButtonPadding, AdminPushButton, PresentationStatusApproved, PresentationStatusDeclined } = config;

    return (
      <UserInterface config={config} logo={logo} user={user} logout={this.handleLogout} speaker={true} search={config.adminSearch} handleSearch={this.handleSearch}>
        {
          filtered.map((item, index) => {
            const approved = item.presentationStatus === 2,
                  declined = item.presentationStatus === 3,
                  pushed = item.presentationStatus === 4;
            const clickApprove = (approved || declined) ? null : this.handleApprove,
                  clickDecline = (approved || declined) ? null : this.handleDecline,
                  clickPush = (pushed) ? null : this.handlePush;
            const formatedFileDate = moment.utc(item.uploadTime).local().format("YYYY-MM-DD HH:mm"),
                  formatedDate = item.startTime ? moment(item.startTime).format("ddd, MMM DD") : "Time not set",
                  formatedTime = item.startTime ? moment(item.startTime).format("HH:mm") : "";
            return (
              <Admin textColor={MainTextColor} color={primaryColor} colorDecline={PresentationStatusDeclined} colorApprove={PresentationStatusApproved} key={index} buttonPadding={AdminButtonPadding} pushColor={AdminPushButton}>

                <div className="admin-page-date"><div>{formatedTime}</div>{formatedDate}</div>

                <div className="admin-page-container">
                  <div onClick={this.handleShow.bind(this, item)}>{item.title}</div>
                  <div className="admin-page_speakers">
                    {
                      item.speakers.map((speak, index) => {
                        return (
                          <div key={index}>
                            <div>{speak.speaker.firstName} {speak.speaker.lastName}</div>
                          </div>
                        )
                      })
                    }
                  </div>
                </div>


                  <div className="admin-page-body__accept">
                    {
                      (item.presentationStatus !== 0) ? (
                        <Fragment>
                          <div className="buttons">
                            <Download config={this.props.config} item={item} />
                            {
                              config.pushToConvertationButton && (
                                <button className={`btn btn-push ${pushed && "btn-pushed"}`} id={item.id} onClick={clickPush}>{pushed ? "Pushed" : "Push"}</button>
                              )
                            }
                            {
                              !config.simpleAdminPage && (
                                <Fragment>
                                  <button className={`btn btn-accept ${(approved) && "btn-approved"} ${(declined || pushed) && "btn-declined-approve"}`} id={item.id} onClick={clickApprove}>{approved ? "Approved" : "Approve"}</button>
                                  <button className={`btn btn-decline ${(approved || pushed) && "btn-approved-decline"} ${declined && "btn-declined"}`} id={item.id} onClick={clickDecline}>{declined ? "Declined" : "Decline"}</button>
                                </Fragment>
                              )
                            }
                            <button className="btn btn-upload" id={item.id} onClick={this.handleShow.bind(this, item)}>Upload</button>
                          </div>
                          <div className="admin-page-body-date">{item.uploadedByFirstName && `Uploaded by ${item.uploadedByFirstName} ${item.uploadedByLastName}`}<br/>{formatedFileDate}</div>
                          <div className="admin-page-container_small-text">{getFileSizeName(item.presentationSize)}</div>
                        </Fragment>
                      ) : (
                        <div className="buttons">
                          <button className="btn btn-upload" id={item.id} onClick={this.handleShow.bind(this, item)}>Upload</button>
                        </div>
                      )
                    }
                  </div>

              </Admin>
            )
          })
        }
         { showModal && <SessionModal admin={true} config={config} name={config.urlName} show={showModal} header={header} uploading={uploading} waitingUploadResponse={waitingUploadResponse} uploaded={uploaded} session={session} status={status} handleUpload={this.uploadFile} handleClose={this.handleClose} />}
      </UserInterface>
    );
  }
};

export default inject("store")(AdminPage);
