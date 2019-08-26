import React, { PureComponent } from "react";
import screenfull from "screenfull";

import "styles/pages/slideshow_page.scss";

import AppLayout from "components/AppLayout";
import SlideshowPanel from "components/slideshow/SlideshowPanel";
import SlideshowSlidePane from "components/slideshow/SlideshowSlidePane";
import { bindAll } from "components/Utils";
import SlideshowManager from "components/SlideshowManager";

class Slideshow extends PureComponent {
  constructor(...args) {
    super(...args);
    bindAll(this, "fullScreenChangeHandler", "changePlaceHolderHandler", "dropHandler", "mouseMoveHandler", "toggleFullScreenHandler", "hidePanel");
    this.state = { slideSrc: null, isPanelVisible: true, isFullScreen: false, placeholderSrc: null, videos: [], embeds: [] };
  }

  componentDidMount() {
    screenfull.on("change", this.fullScreenChangeHandler);

    if ("SharedWorker" in window) {
      SlideshowManager.init().on("changeSlide", (data) => {
        this.setState({ slideSrc: data.src, videos: data.videoObjects, embeds: data.embedObjects });
      }).on("setPlaceholder", () => {
        this.setState({ slideSrc: this.state.placeholderSrc, videos: [], embeds: [] });
      }).sendSlideDataRequest();
    } else {
      alert("Slideshow requires browser with SharedWorker Web API support");
    }
  }

  componentWillUnmount() {
    clearTimeout(this.hidePanelTimeout);
    screenfull.off("change", this.fullScreenChangeHandler);
    SlideshowManager.destroy();
  }

  // TODO: deprecated in react 16, use componentDidUpdate?
  componentWillUpdate(nextProps, nextState) {
    if (this.state.placeholderSrc && this.state.placeholderSrc !== nextState.placeholderSrc) {
      URL.revokeObjectURL(this.state.placeholderSrc);
    }
  }

  setPlaceholderImage(imgUrl) {
    if (this.state.placeholderSrc) {
      URL.revokeObjectURL(this.state.placeholderSrc);
    }

    this.setState({
      placeholderSrc: imgUrl,
      slideSrc: imgUrl
    });
  }

  fullScreenChangeHandler() {
    this.setState({isFullScreen: !!screenfull.isFullscreen});
  }

  toggleFullScreenHandler() {
    if (this.state.isFullScreen) {
      screenfull.exit();
    } else {
      screenfull.request(document.documentElement);
    }
  }

  changePlaceHolderHandler(file) {
    const fileReader = new FileReader(),
          mimeType = file.type;

    fileReader.onload = (e) => {
      const buffer = e.target.result,
            blob = new Blob([new Uint8Array(buffer)], {type: mimeType});

      const imageUrl = URL.createObjectURL(blob);
      this.setPlaceholderImage(imageUrl);
    };

    fileReader.readAsArrayBuffer(file);
  }

  dropHandler(e) {
    e.preventDefault();

    if (!e.dataTransfer.files.length)
      return;

    this.changePlaceHolderHandler(e.dataTransfer.files[0]);
  }

  dragHandler(e) {
    e.preventDefault();
  }

  mouseMoveHandler() {
    if (this.state.isPanelVisible) {
      clearTimeout(this.hidePanelTimeout);
      this.hidePanelTimeout = setTimeout(this.hidePanel, 1000);
    } else {
      this.setState({isPanelVisible: true});
    }
  }

  hidePanel() {
    this.setState({isPanelVisible: false});
  }

  render() {
    const { slideSrc, videos, embeds, isPanelVisible, isFullScreen } = this.state;

    return (
      <AppLayout pageClass="slideshow-page" hasHeader={false}>
        <div className="slideshow -fill" onMouseMove={this.mouseMoveHandler} onDrop={this.dropHandler} onDragOver={this.dragHandler}>
          <SlideshowSlidePane slideSrc={slideSrc} videos={videos} embeds={embeds} />
          <SlideshowPanel isVisible={isPanelVisible} isFullScreen={isFullScreen} toggleFullScreenHandler={this.toggleFullScreenHandler} changePlaceHolderHandler={this.changePlaceHolderHandler} />
        </div>
      </AppLayout>
    );
  }
};

export default Slideshow;
