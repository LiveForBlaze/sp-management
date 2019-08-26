import React, { PureComponent } from "react";

import LivePlayer from "components/LivePlayer";

import "../../../styles/pages/aba_page.scss";

class AbaPage extends PureComponent {
  state = {
    ...this.getPlayerDimensions()
  };

  componentDidMount() {
    document.title = "American Booksellers Association";
    document.querySelector('link[rel="shortcut icon"]').href = "/favicon-aba.ico";
    window.addEventListener("resize", this.handleWindowResize, false);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.handleWindowResize, false);
  }

  getPlayerDimensions() {
    return {
      playerWidth: document.body.clientWidth,
      playerHeight: Math.floor(window.innerHeight * 0.5625)
    };
  }

  handleWindowResize = () => {
    this.setState(this.getPlayerDimensions());
  }

  render() {
    return (
      <div className="aba-home-page">
        <div className="aba-home-page-firstPart">
          <div className="aba-home-page-main">
            <LivePlayer roomId="Live video room" width={this.state.playerWidth} height={this.state.playerHeight} />
          </div>
        </div>

        <div className="aba-home-page-footer">
          <div className="aba-home-page-container">
            <div className="aba-home-page-footer-text">
              <h2>Streaming schedule</h2>
              <table className="aba-home-page-footer-text__table" cellSpacing="0">
                <tbody>
                  <tr>
                    <td colSpan="2"><strong className="aba-home-page-footer-text__table__date">Thursday, June 27</strong><br/></td>
                  </tr>
                  <tr>
                    <td>7:45am – 8:45am</td>
                    <td><strong className="aba-big aba-blue">Opening Keynote: Ann Patchett</strong><div>Ann Patchett, the author of eight novels and three works of nonfiction, is the winner of the PEN/Faulkner Award, England’s Orange Prize, and the Book Sense Book of the Year, and was named one of Time magazine’s 100 Most Influential People in the World. Her work has been translated into more than 30 languages. She is the co-owner of Parnassus Books in Nashville, where she lives with her husband, Karl, and their dog, Sparky.</div></td>
                  </tr>
                  <tr>
                    <td colSpan="2"><strong className="aba-home-page-footer-text__table__date">Friday, June 28</strong><br/></td>
                  </tr>
                  <tr>
                    <td>7:45am - 9:00am</td>
                    <td><strong className="aba-big aba-blue">Indies Introduce Breakfast</strong><div>Indies Introduce is about what independent booksellers do best: Discovering exciting debut authors and sharing the best with readers across the country. You will hear about the title selection process from the bookseller panelists who curated the list and many of this season’s debut authors will be present to read a short passage and answer a question posed by one of the panelists.</div></td>
                  </tr>
                  <tr>
                    <td>3:00pm - 3:45pm</td>
                    <td><strong className="aba-big aba-blue">Afternoon Keynote: Elizabeth Acevedo</strong><div>Elizabeth Acevedo is the author of The Poet X, which won the National Book Award for Young People’s Literature, the Michael L. Printz Award, the Pura Belpré Award, and the Boston Globe-Horn Book Award. She is a National Poetry Slam champion and holds an MFA in creative writing from the University of Maryland. She lives with her partner in Washington, D.C.</div></td>
                  </tr>
                  <tr>
                    <td>5:15pm - 6:15pm</td>
                    <td><strong className="aba-big aba-blue">Closing Keynote: Alyssa Milano</strong><div>Actress Alyssa Milano is a lifelong activist who is passionate about fighting for human rights. In addition to being named a National Ambassador by UNICEF and a 2017 Person of the Year by Time, Milano speaks to kids around the country about the importance of voting and teaches them how to fill out a ballot. Most recently, Milano popularized the #MeToo hashtag. She lives in Los Angeles with her husband and two kids.</div></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div className="aba-copyright">
          2019 &copy; Powered by SlideSpiel.com
        </div>
      </div>
    );
  }
};

export default AbaPage;
