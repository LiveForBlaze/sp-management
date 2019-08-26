import React, { PureComponent } from 'react';
import localforage from "localforage";

import BackedupRecordItem from "components/lists/BackedupRecordItem";

class RecordsBrowser extends PureComponent {
  constructor(...args) {
    super(...args);

    this.state = {
      dbs: null
    };

    this.recordsStore = localforage.createInstance({name: "recordings"});
  }

  componentDidMount() {
    this.getRecordingsListFromHash();
    window.addEventListener("hashchange", this.getRecordingsListFromHash, false);
  }

  componentWillUnmount() {
    window.removeEventListener("hashchange", this.getRecordingsListFromHash, false);
  }

  getRecordingsListFromHash = () => {
    const recordId = window.location.hash.slice(1);

    if (!recordId) {
      this.getRecordingsListFromStorage();
    } else {
      this.setState({dbs: [recordId]});
    }
  };

  getRecordingsListFromStorage() {
    this.recordsStore.keys((err, keys) => {
      if (err) {
        alert("err occured while fetching list of recordings");
      } else {
        this.setState({dbs: keys});
      }
    });
  }

  handleRecordDelete = (dbName) => {
    this.recordsStore.removeItem(dbName);
    const dbs = this.state.dbs.filter((v) => v !== dbName);
    this.setState({dbs});
  };

  render() {
    if (!this.state.dbs) {
      return (<div>Loading..</div>);
    } else if (!this.state.dbs.length) {
      return (<div>No records</div>);
    } else {
      return (
        <div>
        { this.state.dbs.map((dbName) => (
            <BackedupRecordItem key={dbName} db={dbName} onDelete={this.handleRecordDelete} />
          ))
        }
        </div>
      );
    }
  }
};

export default RecordsBrowser;
