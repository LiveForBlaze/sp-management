import React, { PureComponent } from "react";

import mainSectionImg from "assets/images/home/main.jpg";
import "styles/pages/home_page.scss";

import rfmaLogoImg from "assets/images/customers/rfma_logo.png";
import abaLogoImg from "assets/images/customers/aba_logo.jpg";
import adhaLogoImg from "assets/images/customers/adha_logo.jpg";
import avmaLogoImg from "assets/images/customers/avma_logo.svg";
import lsaLogoImg from "assets/images/customers/lsa_logo.png";
import meccLogoImg from "assets/images/customers/mecc_logo.png";
import naaLogoImg from "assets/images/customers/naa_logo.jpg";
import nboaLogoImg from "assets/images/customers/nboa_logo.png";
import tiaLogoImg from "assets/images/customers/tia_logo.png";
import ucaLogoImg from "assets/images/customers/uca_logo.png";

import efficiencyImg from "assets/images/home/efficiency.png";
import launchingImg from "assets/images/home/launching.png";
import usabilityImg from "assets/images/home/usability.png";
import analyticsImg from "assets/images/home/analytics.svg";
import brandingImg from "assets/images/home/branding.svg";
import marketingImg from "assets/images/home/marketing.svg";

import AppLayout from "components/AppLayout";
import PromoHeaderMenu from "components/menus/PromoHeaderMenu";
import HomePageSlider from "components/home/HomePageSlider";
import DemoRequestFormWrapper from "components/forms/DemoRequestFormWrapper";

class HomePage extends PureComponent {
  componentDidMount() {
    window.fbq("track", "ViewContent");
  }

  render() {
    return (
      <AppLayout pageClass="home-page" hasHeader={false}>
        <header className="home-page__header">
          <PromoHeaderMenu />
        </header>
        <section className="home-page__main">
          <img className="home-page__main__img" src={mainSectionImg} alt="cool pic" />
          <div className="home-page__main__text">
            <p>Capture your sessions<br />at conferences and reuse them for online education</p>
            <div className="home-page__main__buttons">
              <a className="btn -sq -color--white" href="#services">Learn More</a>
              <a className="btn -sq -color--white" href="#feedback">Get in Touch</a>
            </div>
          </div>
          <img className="home-page__main__img home-page__main__img--desktop" src={mainSectionImg} alt="cool pic" />
        </section>
        <section className="home-page__customers">
          <div className="home-page__customers__heading">Trusted by 54 associations in the US</div>
          <ul className="home-page__customers__list list">
            <li className="home-page__customers__list__item box--vertical">
              <a href="#review-rfma">
                <img src={rfmaLogoImg} alt="RFMA logo" />
              </a>
            </li>
            <li className="home-page__customers__list__item box--vertical">
              <a href="#review-tia">
                <img src={tiaLogoImg} alt="TIA logo" />
              </a>
            </li>
            <li className="home-page__customers__list__item box--vertical">
              <a href="#review-avma">
                <img src={avmaLogoImg} alt="AVMA logo" />
              </a>
            </li>
            <li className="home-page__customers__list__item box--vertical">
              <a href="#review-nboa">
                <img src={nboaLogoImg} alt="NBOA logo" />
              </a>
            </li>
            <li className="home-page__customers__list__item box--vertical">
              <a href="#review-aba">
                <img src={abaLogoImg} alt="ABA logo" />
              </a>
            </li>
            <li className="home-page__customers__list__item box--vertical">
              <a href="#review-lsa">
                <img src={lsaLogoImg} alt="LSA logo" />
              </a>
            </li>
            <li className="home-page__customers__list__item box--vertical">
              <a href="#review-naa">
                <img src={naaLogoImg} alt="NAA logo" />
              </a>
            </li>
            <li className="home-page__customers__list__item box--vertical">
              <a href="#review-uca">
                <img src={ucaLogoImg} alt="UCA logo" />
              </a>
            </li>
            <li className="home-page__customers__list__item box--vertical">
              <a href="#review-mecc">
                <img src={meccLogoImg} alt="MECC logo" />
              </a>
            </li>
            <li className="home-page__customers__list__item box--vertical">
              <a href="#review-adha">
                <img src={adhaLogoImg} alt="ADHA logo" />
              </a>
            </li>
          </ul>
        </section>
        <section className="home-page__services" id="services">
          <div className="home-page__services__heading">What we do?</div>
          <div className="home-page__services__sub-heading">Streaming and Recording Services</div>
          <ul className="home-page__services__list list">
            <li>
              <img src={efficiencyImg} alt="icon" />
              <h5>Efficiency</h5>
              <p>Cost efficient. No need to ship and rent expensive equipment</p>
            </li>
            <li>
              <img src={launchingImg} alt="icon" />
              <h5>Launching</h5>
              <p>Available online in 60 seconds after the session ends</p>
            </li>
            <li>
              <img src={usabilityImg} alt="icon" />
              <h5>Usability</h5>
              <p>Delivered via interactive players with slide by slide navigation</p>
            </li>
          </ul>
          <div className="home-page__services__sub-heading">Continuing Education Platform</div>
          <ul className="home-page__services__list list">
            <li>
              <img src={analyticsImg} alt="icon" />
              <h5>Analytics</h5>
              <p>Edit and manage recorded content online. Quizzes and CE tracking. No special skills required</p>
            </li>
            <li>
              <img src={brandingImg} alt="icon" />
              <h5>Branding</h5>
              <p>Website and mobile app under your brand. Customizable storefront</p>
            </li>
            <li>
              <img src={marketingImg} alt="icon" />
              <h5>Marketing</h5>
              <p>On-demand marketing services. Defining target audience, launching promotions</p>
            </li>
          </ul>
          <div className="home-page__services__buttons">
            <a href="#feedback" className="btn -sq -color--white">Get in Touch</a>
          </div>
        </section>
        <section className="home-page__reviews" id="reviews">
          <div className="home-page__reviews__heading">What customers say about us:</div>
          <HomePageSlider />
        </section>
        <section className="home-page__feedback" id="feedback">
          <div className="home-page__feedback__heading">We understand that every association is unique.</div>
          <div className="home-page__feedback__sub-heading">Let's learn more about each other.</div>
          <DemoRequestFormWrapper />
        </section>
      </AppLayout>
    );
  }
};

export default HomePage;
