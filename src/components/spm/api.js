const apiHost = "https://slidespielspeakersapi.azurewebsites.net";

const Api = {
  restoreUser(urlName) {
    const defer = window.jQuery.Deferred();
    if (!localStorage.getItem(`${urlName}-access_token`)) {
      defer.reject();
    } else {
      this.getUser(urlName).then(defer.resolve, () => {
        localStorage.removeItem(`${urlName}-access_token`);
        defer.reject();
      });
    }
    return defer.promise();
  },

  getUser(urlName, id = "me") {
    return this.req(urlName, "get", `user/${id}`);
  },
  logIn(urlName, associationId, username, password) {
    const defer = window.jQuery.Deferred();
    window.jQuery.post(`${apiHost}/token`, {
      associationId,
      grant_type: "password",
      username,
      password
    }).done((data) => {
      localStorage.setItem(`${urlName}-access_token`, data.access_token);
      this.getUser(urlName).then(defer.resolve, defer.reject);
    }).fail((err) => {
      console.error("Failed to get token");
      defer.reject(err.responseJSON ? err.responseJSON.error_description : "Bad internet connection" );
    });
    return defer.promise();
  },

  getTracks(urlName, eventId) {
    return this.req(urlName, "get", `event/${eventId}/sessions/my`);
  },
  getFile(urlName, recordingId) {
    return this.binaryReq(urlName, "get", `session/${recordingId}/presentation`);
  },
  getSubmittedSessions(urlName, eventId) {
    return this.req(urlName, "get", `/event/${eventId}/sessions/submitted`);
  },
  getAllSessions(urlName, eventId) {
    return this.req(urlName, "get", `/event/${eventId}/sessions`);
  },
  addSession(urlName, eventId, title, startTime) {
    return this.req(urlName, "post", `/event/${eventId}/sessions`, { title, startTime });
  },
  sessionApprove(urlName,sessionId) {
    return this.req(urlName, "post", `session/${sessionId}/approve`);
  },
  sessionDecline(urlName, sessionId) {
    return this.req(urlName, "post", `session/${sessionId}/decline`);
  },
  sessionPush(urlName, sessionId) {
    return this.req(urlName, "post", `session/${sessionId}/convert`);
  },
  sendFile(urlName, sessionId, file){
    const formData = new FormData();
    formData.append("presentation", file);
    return this.req(urlName, "post", `session/${sessionId}/presentation`, formData, {
      mimeType: "multipart/form-data",
      contentType: false,
      processData: false,
      dataType: "json"
    });
  },

  getEventData(urlName, eventId) {
    return this.req(urlName, "get", `event/${eventId}`);
  },

  getTrack(urlName, portalId, trackId) {
    return this.req(urlName, "get", `track/${trackId}`);
  },


  req(urlName, method, path, data, ajaxSettings={}) {
    const token = localStorage.getItem(`${urlName}-access_token`),
          url = `${apiHost}/api/${path}`;
    return window.jQuery.ajax({...{
      headers: { Authorization: `Bearer ${token}` },
      method,
      data,
      url
    }, ...ajaxSettings});
  },

  binaryReq(urlName, method, path, data) {
    return this.req(urlName, method, path, data, {
      xhrFields: {
        responseType: "blob"
      },
      processData: false
    });
  },

  makeAssetUrl(path) {
    return `${apiHost}${path}`;
  }
};

export default Api;
