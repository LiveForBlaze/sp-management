import React, { PureComponent } from "react";

import LivePlayer from "components/LivePlayer";

import "../../../styles/pages/avma_page.scss";
import Logo from "../../../assets/images/avma-logo.png";

const liveRooms = ["Room 1", "Room 2"];

class AvmaPage extends PureComponent {
  state = {
    selectedRoom: liveRooms[0],
    ...this.getPlayerDimensions()
  };

  componentDidMount() {
    document.title = "American Veterinary Medical Association";
    document.querySelector('link[rel="shortcut icon"]').href = "/favicon-avma.ico";
    window.addEventListener("resize", this.handleWindowResize, false);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.handleWindowResize, false);
  }

  getPlayerDimensions() {
    return {
      playerWidth: window.innerWidth - 17,
      playerHeight: Math.floor(window.innerHeight * 0.5625)
    };
  }

  handleChangeRoom = (e) => {
    this.setState({selectedRoom: e.target.name});
  }

  handleWindowResize = () => {
    this.setState(this.getPlayerDimensions());
  }

  render() {
    return (
      <div className="avma-home-page">
        <div className="avma-home-page-firstPart">
          <div className="avma-home-page-header">
            <div className="avma-home-page-container avma-row">
              <div className="avma-header clearfix">
                <img src={Logo} className="avma-home-page__logo" alt="AVMA logo" />
              </div>
              <div className="avma-home-page-header__text">
                Veterinary Leadership Conference. Live Stream.
              </div>
            </div>
          </div>
          <div className="avma-home-page-main">
            <LivePlayer roomId={this.state.selectedRoom} width={this.state.playerWidth} height={this.state.playerHeight} />
          </div>
          <div className="avma-home-page-container">
            <div className="avma-home-page-footer-buttons">
              { liveRooms.map((liveRoom) => {
                  const cls = `avma-btn ${this.state.selectedRoom === liveRoom ? "avma-btn-selected" : ""}`;
                  return (
                    <button key={liveRoom} type="button" name={liveRoom} className={cls} onClick={this.handleChangeRoom}>{liveRoom}</button>
                  );
                })
              }
            </div>
          </div>
        </div>


        <div className="avma-home-page-footer">
          <div className="avma-home-page-container">
            <div className="avma-home-page-footer-text">
              <h2>Streaming schedule</h2>
              <table className="avma-home-page-footer-text__table" cellSpacing="0" cellPadding="20">
                <thead>
                  <tr>
                    <th>Time</th>
                    <th>Room 1</th>
                    <th>Room 2</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><strong>Saturday</strong><br/> 1:30pm – 3:00pm</td>
                    <td><strong className="big">Bring Out The Leader In You </strong><strong className="gray">Speakers:</strong><br /><div className="gray">Ellen Lowery, DVM, PhD <br /> Debra Smith, DVM</div></td>
                    <td><strong className="big">Transforming Corporate Culture by Shifting Mindset and Engaging Practical Presence</strong><div className="gray"><strong >Speakers:</strong><br /> Kathy Gruver, PhD, CHt, LMT </div></td>
                  </tr>
                  <tr>
                    <td><strong>Sunday</strong><br/> 7:30am - 8:20am</td>
                    <td><strong className="big">Get MotiVETed!: Decreasing Burnout and Compassion Fatigue</strong><strong className="gray">Speakers:</strong><br /><div className="gray"> Quincy Hawley, DVM <br /> Renee Machel, CPC</div></td>
                    <td><strong className="big">Veterinary Virtual Care 2019 - Policy, Practice, and Perspectives</strong><strong className="gray">Speakers:</strong><br /><div className="gray">Mia Cary, DVM <br/>Gail Golab, PhD, DVM, MANZCVS, DACAW <br/>Adrian Hochstadt, JD, CAE
Lori Teller, DVM; ABVP</div></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div className="avma-copyright">
          2019 &copy; Powered by SlideSpiel.com
        </div>
      </div>
    );
  }
};

export default AvmaPage;
