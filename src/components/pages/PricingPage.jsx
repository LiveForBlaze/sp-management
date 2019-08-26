import React from "react";

import "styles/pages/pricing_page.scss";

import AppLayout from "components/AppLayout";
import PromoHeaderMenu from "components/menus/PromoHeaderMenu";
import DemoRequestFormWrapper from "components/forms/DemoRequestFormWrapper";

const PricingPage = () => {
  return (
    <AppLayout pageClass="pricing-page" hasHeader={false}>
      <header className="pricing-page__header">
        <PromoHeaderMenu />
      </header>
      <section className="pricing-page__main">
        <h1 className="pricing-page__heading">Pricing</h1>
        <div className="pricing-page__main__text">
          <p>SlideSpiel provides four options to capture conference sessions:</p>
          <ul className="list list--disc">
            <li><span className="-color--penxy-green">$100 / 1-hour session</span> – recording voice of the speaker synced with slides</li>
            <li><span className="-color--penxy-green">$200 / 1-hour session</span> – streaming voice of the speaker synced with slides</li>
            <li><span className="-color--penxy-green">$300 / 1-hour session</span> – recording video of the speaker synced with slides</li>
            <li><span className="-color--penxy-green">$500 / 1-hour session</span> – streaming of video of the speaker synced with slides</li>
          </ul>

          <p>Additionally, you pay staff fees: </p>
          <ul className="list list--disc">
            <li><span className="-color--penxy-green">$300 / day per person</span> – typically we need 1 person per 5 concurrent rooms</li>
            <li><span className="-color--penxy-green">$300 / person</span> – to cover travel cost</li>
            <li><span className="-color--penxy-green">A hotel room / person</span> – for on-site staff stay</li>
          </ul>

          <p>Price includes on-site help, travel cost, basic editing, hosting for 18 months, exporting in mp4 video, etc.</p>

          <p>Optionally, SlideSpiel provides its platform to host recorded content:</p>
          <ul className="list list--disc">
            <li>
              Branded website:
              <ul className="list list--circle">
                <li><span className="-color--penxy-green">$500 / y</span> – setup cost</li>
                <li><span className="-color--penxy-green">$1000 / y</span> – managing access with individual logins and passwords</li>
                <li><span className="-color--penxy-green">$2000 / y</span> – storefront that allows to purchase access to content</li>
              </ul>
            </li>
            <li>
              Branded mobile app:
              <ul className="list list--circle">
                <li><span className="-color--penxy-green">$2500 / y</span> – setup cost </li>
                <li><span className="-color--penxy-green">$1000 / y</span> – managing access with individual logins and passwords</li>
                <li><span className="-color--penxy-green">$2000 / y</span> – storefront that allows to purchase access to content</li>
              </ul>
            </li>
          </ul>

          <p>Optionally, SlideSpiel provides on-demand marketing services:</p>
          <ul className="list list--disc">
            <li>market research and advise</li>
            <li>in-person on-site sales</li>
            <li>email marketing</li>
            <li>paid Google/Facebook/Twitter ads, retargeting</li>
          </ul>
        </div>
      </section>
      <section className="pricing-page__feedback">
        <div className="pricing-page__heading">Would you like to get a quote?</div>
        <div className="pricing-page__sub-heading">Leave your email address or contact us.</div>
        <div>
          <div className="pricing-page__feedback__contact">
            CEO, Vova Platov<br /><a href="mailto:v.platov@slidespiel.com">v.platov@slidespiel.com</a>
          </div>
          <div className="pricing-page__feedback__form">
            <DemoRequestFormWrapper />
          </div>
        </div>
      </section>
    </AppLayout>
  );
};

export default PricingPage;
