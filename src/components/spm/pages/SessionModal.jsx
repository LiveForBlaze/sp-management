import React, { Component } from 'react';
import { SessionModalWindow } from "../styles/session-modal";
import moment from "moment";

import { getFileSizeName } from "../helpers/fileSize";


class SessionModal extends Component {
  render() {
    const { show, header, status, session, handleUpload, uploading, waitingUploadResponse, uploaded, name, config, admin } = this.props,
          { PresentationStatusDeclined, PresentationStatusApproved, PresentationStatusPushed, primaryColor, simpleAdminPage } = config;
    const formatedDate = session ? moment.utc(session.uploadTime).local().format("YYYY-MM-DD HH:mm") : "";
    return (
      <SessionModalWindow show={show} admin={admin} simpleAdminPage={simpleAdminPage} color={primaryColor} approvedColor={PresentationStatusApproved} pushedColor={PresentationStatusPushed} onHide={this.props.handleClose} declinedColor={PresentationStatusDeclined} className={`${name}-spm-modal`}>
          <div className={`modal__header account-item-status-${status}`}>{header}</div>
          <div className="modal__body-main">
            {
              (status === 0) ? (
                <div>
                  <div>
                    Please upload the final version of your presentation file by clicking button below. <br/><br/>
                    This presentation will be displaying on the projector screen in the session room. <br/><br/>
                    No last minute updates will be accepted.
                  </div>
                  { uploading ? (
                    <div className={`loading ${waitingUploadResponse ? "meter" : ""}`}>
                      <div className={`loading-percentage ${uploaded < 50 ? "loading-colored" : ""}`}>{waitingUploadResponse ? "Uploading to server. Please wait..." : `${uploaded}%`}</div>
                      <span className="loading-progress-bar" style={{width: `${uploaded}%`}} />
                    </div>
                  ) : (
                    <div className="modal-content-footer">
                      <div>Supported file types: PPTX, PPT, PDF, Keynote.<br/>Help: <a href="mailto:info@penxy.com">info@penxy.com</a></div>
                      <div>
                        <div className="account-page-body__upload">
                          <label htmlFor="file-upload" className="btn btn-download">
                            Upload
                            <input id="file-upload" type="file" accept=".pptx,.ppt,.pdf,.key" onChange={handleUpload} sessionid={session.id} />
                          </label>
                        </div>
                      </div>
                    </div>
                  )
                  }
                </div>
              ) : (
                <div>
                  <div>
                    File: {session.presentationName}<br/>
                    Size: {getFileSizeName(session.presentationSize)} <br/>
                    Date: {formatedDate}<br/><br/>
                    Make sure that you’ve uploaded the final version of your presentation file.<br/><br/>
                    This presentation will be displaying on the projector screen in the session room.
                  </div>
                  { uploading ? (
                    <div className={`loading ${waitingUploadResponse ? "meter" : ""}`}>
                      <div className={`loading-percentage ${uploaded < 50 ? "loading-colored" : ""}`}><div>{waitingUploadResponse ? "Uploading to server. Please wait..." : `${uploaded}%`}</div></div>
                      <span className="loading-progress-bar" style={{width: `${uploaded}%`}} />
                    </div>
                  ) : (
                    <div className="modal-content-footer">
                      <div>Supported file types: PPTX, PPT, PDF, Keynote.<br/>Help: <a href="mailto:info@penxy.com">info@penxy.com</a></div>
                      <div>
                        <div className="account-page-body__upload">
                          <label htmlFor="file-upload" className="btn btn-download">
                            {(status === 0) ? "Upload" : "Update"}
                            <input id="file-upload" type="file" accept=".pptx,.ppt,.pdf,.key" onChange={handleUpload} sessionid={session.id} />
                          </label>
                        </div>
                      </div>
                    </div>
                  )
                  }
                </div>
              )
            }
          </div>
      </SessionModalWindow>
    )
  }
}

export default SessionModal;
