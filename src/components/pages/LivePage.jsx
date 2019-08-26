import React, { PureComponent } from "react";

import AppLayout from "components/AppLayout";
import LivePlayer from "components/LivePlayer";

class LivePage extends PureComponent {
  constructor(...args) {
    super(...args);
    this.state = { roomId: "debug" };
  }

  render() {
    return (
      <AppLayout pageClass="live-page" hasHeader={false}>
        <div className="content-box">
          <h1>Live</h1>
          <select onChange={(e) => { this.setState({roomId: e.target.value}); }} value={this.state.roomId}>
            <option value="debug">debug</option>
            <option value="Room 1">Room 1</option>
            <option value="Room 2">Room 2</option>
            <option value="Live video room">Live video room</option>
          </select>
          <br /><br />
          <LivePlayer roomId={this.state.roomId} width={640} height={394} />
        </div>
      </AppLayout>
    );
  }
};

export default LivePage;
