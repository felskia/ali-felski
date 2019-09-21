import '../styles/style.scss';
import Link from 'next/link';
import HeadingTitle from '../components/heading-title';
import Default from '../layouts/default';

const focalPoint = {
  objectPosition: '55% 5%',
};

const HeroContent = () => (
  <>
    <img src="/static/images/boxing-girl.jpg" alt="🏋" style={focalPoint} />
    <div className="page-width hero-content__wrapper">
      <HeadingTitle
        isOnDark
        isPageHeader
        gutterPosition="top"
        align="left"
        title="The Ultimate Business Management Software for Boutique Fitness"
      />
      <p className=" text--inverse subhed--header subhed--sm">
        From reservations to reports, we have everything to run your business successfully.
      </p>
      <div className="button--header">
        <Link href="/platform">
          <a className="button">
            <span>
              Learn more
            </span>
          </a>
        </Link>
      </div>
    </div>
  </>
);

const indexPage = () => (
  <Default
    heroContent={<HeroContent />}
    heroLeft
    metaDescription="Learn about the best premium business management software for the boutique fitness industry"
    pageId="index"
    title="Premium Boutique Fitness Online Business Management Software"
  >
    <section className="section section--top-only">
      <div className="page-width">
        <p className="subhed align--center">
          Mariana’s mission is to inspire, motivate, and enable people to improve their health
          and fitness, one reservation at a time. We accomplish this with a robust product suite
          and a team passionately focused on your success.
        </p>
      </div>
    </section>

    <section className="section section--raised">
      <div className="media-object media-object--middle page-width middle">
        <div className="media-object__image media-object__image--left media-object__image--bleed-left">
          <img src="/static/images/home-group1.png" alt=" " />
        </div>
        <div className="media-object__text gutter--none gutter--top">
          <HeadingTitle
            title="Easy to Use"
          />
          <p>
            From real time updates across multiple devices at check-in time, to robust, enterprise
            level reports that include information for ALL studios with the click of a button,
            Mariana’s suite of intuitive tools allows studio operators to quickly and easily manage
            their business.
          </p>
        </div>
      </div>
    </section>

    <section className="section section--lowlight section--margin-negative">
      <div className="media-object--flex-lg page-width top">
        <div className="media-object__text gutter--none gutter--top">
          <HeadingTitle
            textWidth="small"
            title="Revenue Generating Features"
          />
          <p className="text-width--sm">
            Mariana Tek offers a full suite of tools that help grow your business. We believe
            there are compelling ways to increase revenue without resorting to steep discounts.
            Let us know if you’d like to learn more.
          </p>
        </div>
        <div className="media-object__image media-object__image--right media-object__image--right-grid">
          <ul className="gridlist gridlist__flex gridlist__media-object">
            <li className="gridlist__item gridlist__item-flex">
              <div className="gridlist__icon">
                <svg width="92px" height="92px" viewBox="0 0 92 92" version="1.1" xmlns="http://www.w3.org/2000/svg">
                  <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                    <g id="home-copy-2" transform="translate(-535.000000, -2208.000000)" fillRule="nonzero">
                      <g id="Group-4" transform="translate(536.000000, 2209.000000)">
                        <g id="checked" transform="translate(25.000000, 24.000000)" fill="#31057C">
                          <path d="M20.5,0 C9.16464066,0 0,9.16464066 0,20.5 C0,31.8353593 9.16464066,41 20.5,41 C31.8353593,41 41,31.8353593 41,20.5 C41,9.16464066 31.8353593,0 20.5,0 Z M20.5,38.5882598 C10.6117402,38.5882598 2.41174025,30.3882598 2.41174025,20.5 C2.41174025,10.6117402 10.6117402,2.41174025 20.5,2.41174025 C30.3882598,2.41174025 38.5882598,10.6117402 38.5882598,20.5 C38.5882598,30.3882598 30.3882598,38.5882598 20.5,38.5882598 Z" id="Shape" />
                          <path d="M25.1271015,17.3798297 L19.1779167,24.2152368 C19.1779167,24.4683839 18.9575906,24.4683839 18.7372645,24.4683839 C18.5169384,24.4683839 18.5169384,24.4683839 18.2966123,24.2152368 L15.8728985,21.4304737 C15.4322463,20.9241795 14.7711414,20.9241795 14.3304892,21.4304737 C13.8898369,21.9367678 13.8898369,22.6963545 14.3304892,23.2026486 L16.7542029,25.9874118 C17.1948552,26.7468529 17.8559601,27 18.7372645,27 C19.618569,27 20.2796739,26.4937059 20.7203261,25.9874118 L26.6695108,19.1520046 C27.1101631,18.6457105 27.1101631,17.8861238 26.6695108,17.3798297 C26.2286054,16.8733901 25.5677537,16.8733901 25.1271015,17.3798297 Z" id="Shape" />
                        </g>
                        <circle id="Oval" stroke="#19D3C5" strokeWidth="2" cx="45" cy="45" r="45" />
                      </g>
                    </g>
                  </g>
                </svg>
              </div>
              <div className="gridlist__content">
                <h5 className="heading__xsmall">
                  Leverage tools to optimize class attendance
                </h5>
              </div>
            </li>
            <li className="gridlist__item gridlist__item-flex">
              <div className="gridlist__icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="92" height="92" viewBox="0 0 92 92">
                  <g fill="none" fillRule="evenodd">
                    <g fill="#31057C" fillRule="nonzero" transform="translate(26 32)">
                      <path d="M36.5,0 L3.5,0 C1.6,0 0,1.6 0,3.5 L0,24.5 C0,26.4 1.6,28 3.5,28 L36.4,28 C38.3,28 39.9,26.4 39.9,24.5 L39.9,3.5 C40,1.6 38.4,0 36.5,0 Z M3.5,2.3 L36.4,2.3 C37.1,2.3 37.6,2.8 37.6,3.5 L37.6,5.4 L2.4,5.4 L2.4,3.5 C2.4,2.8 2.8,2.3 3.5,2.3 Z M37.6,7.7 L37.6,9.6 L2.4,9.6 L2.4,7.7 L37.6,7.7 Z M36.5,25.7 L3.5,25.7 C2.8,25.7 2.3,25.2 2.3,24.5 L2.3,11.9 L37.6,11.9 L37.6,24.5 C37.6,25.2 37.2,25.7 36.5,25.7 Z" />
                      <path d="M1.1,2 L6.9,2 C7.6,2 8,1.6 8,1 C8,0.4 7.6,0 6.9,0 L1.1,0 C0.4,0 0,0.4 0,1 C0,1.6 0.4,2 1.1,2 Z" transform="translate(5 15)" />
                      <path d="M15.8,0 L1.2,0 C0.5,0 0,0.4 0,1 C0,1.6 0.5,2 1.2,2 L15.8,2 C16.3,2 17,1.6 17,1 C17,0.4 16.5,0 15.8,0 Z" transform="translate(5 20)" />
                    </g>
                    <path fill="#19D3C5" fillRule="nonzero" d="M46,92 C20.6,92 0,71.4 0,46 C0,20.6 20.6,0 46,0 C71.4,0 92,20.6 92,46 C92,71.4 71.4,92 46,92 Z M46,2 C21.7,2 2,21.7 2,46 C2,70.3 21.7,90 46,90 C70.3,90 90,70.3 90,46 C90,21.7 70.3,2 46,2 Z" />
                  </g>
                </svg>
              </div>
              <div className="gridlist__content">
                <h5 className="heading__xsmall">
                  Entice customers to pre-order amenities like water, food and bike shoe rentals
                </h5>
              </div>
            </li>
            <li className="gridlist__item gridlist__item-flex">
              <div className="gridlist__icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="92" height="92" viewBox="0 0 92 92">
                  <g fill="none" fillRule="evenodd">
                    <g fill="#31057C" transform="translate(20 21)">
                      <path fillRule="nonzero" d="M1.8,9 C1.3,9 0.9,8.6 0.8,8.1 C0.7,7.6 1.2,7.1 1.7,7 L6.2,6.6 L5.8,2.1 C5.7,1.6 6.2,1.1 6.7,1 C7.2,0.9 7.7,1.4 7.8,1.9 L8.4,8.4 L1.8,9 C1.9,9 1.9,9 1.8,9 Z" transform="translate(35 1)" />
                      <g transform="translate(0 .07)">
                        <path d="M0.1,1.7 C0.1,2.5 0.7,3.1 1.5,3.1 C2.3,3.1 2.9,2.5 2.9,1.7 C2.9,0.9 2.3,0.3 1.5,0.3 C0.7,0.3 0.1,0.9 0.1,1.7" transform="translate(0 27)" />
                        <path d="M0.8,2 C0.8,2.8 1.4,3.4 2.2,3.4 C3,3.4 3.6,2.8 3.6,2 C3.6,1.2 3,0.6 2.2,0.6 C1.4,0.6 0.8,1.2 0.8,2" transform="translate(0 31)" />
                        <path d="M0.9,1.6 C0.9,2.4 1.5,3 2.3,3 C3.1,3 3.7,2.4 3.7,1.6 C3.7,0.8 3.1,0.2 2.3,0.2 C1.5,0.2 0.9,0.8 0.9,1.6" transform="translate(2 36)" />
                        <path d="M0.7,1.8 C0.7,2.6 1.3,3.2 2.1,3.2 C2.9,3.2 3.5,2.6 3.5,1.8 C3.5,1 2.9,0.4 2.1,0.4 C1.3,0.4 0.7,1 0.7,1.8" transform="translate(5 40)" />
                        <path d="M0.4,2 C0.4,2.8 1,3.4 1.8,3.4 C2.6,3.4 3.2,2.8 3.2,2 C3.2,1.2 2.6,0.6 1.8,0.6 C1,0.6 0.4,1.2 0.4,2" transform="translate(9 43)" />
                        <path d="M0.7,1.8 C0.7,2.6 1.3,3.2 2.1,3.2 C2.9,3.2 3.5,2.6 3.5,1.8 C3.5,1 2.9,0.4 2.1,0.4 C1.3,0.4 0.7,1 0.7,1.8" transform="translate(13 46)" />
                        <path d="M0.6,2.2 C0.6,3 1.2,3.6 2,3.6 C2.8,3.6 3.4,3 3.4,2.2 C3.4,1.4 2.8,0.8 2,0.8 C1.2,0.8 0.6,1.5 0.6,2.2" transform="translate(18 47)" />
                        <path d="M0.5,2.3 C0.5,3.1 1.1,3.7 1.9,3.7 C2.7,3.7 3.3,3.1 3.3,2.3 C3.3,1.5 2.7,0.9 1.9,0.9 C1.1,0.9 0.5,1.5 0.5,2.3" transform="translate(28 47)" />
                        <path d="M0.5,1.9 C0.5,2.7 1.1,3.3 1.9,3.3 C2.7,3.3 3.3,2.7 3.3,1.9 C3.3,1.1 2.7,0.5 1.9,0.5 C1.1,0.5 0.5,1.1 0.5,1.9" transform="translate(23 48)" />
                        <path d="M0.3,2 C0.3,2.8 0.9,3.4 1.7,3.4 C2.5,3.4 3.1,2.8 3.1,2 C3.1,1.2 2.5,0.6 1.7,0.6 C0.9,0.6 0.3,1.2 0.3,2" transform="translate(33 46)" />
                        <path d="M0.7,1.5 C0.7,2.3 1.3,2.9 2.1,2.9 C2.9,2.9 3.5,2.3 3.5,1.5 C3.5,0.7 2.9,0.1 2.1,0.1 C1.3,0.1 0.7,0.8 0.7,1.5" transform="translate(37 44)" />
                        <path d="M0.5,2.2 C0.5,3 1.1,3.6 1.9,3.6 C2.7,3.6 3.3,3 3.3,2.2 C3.3,1.4 2.7,0.8 1.9,0.8 C1.1,0.8 0.5,1.4 0.5,2.2" transform="translate(41 40)" />
                        <path d="M0.5,2.3 C0.5,3.1 1.1,3.7 1.9,3.7 C2.7,3.7 3.3,3.1 3.3,2.3 C3.3,1.5 2.7,0.9 1.9,0.9 C1.1,0.9 0.5,1.5 0.5,2.3" transform="translate(44 36)" />
                        <path d="M0.7,1.9 C0.7,2.7 1.3,3.3 2.1,3.3 C2.9,3.3 3.5,2.7 3.5,1.9 C3.5,1.1 2.9,0.5 2.1,0.5 C1.3,0.5 0.7,1.1 0.7,1.9" transform="translate(46 32)" />
                        <path d="M0.7,2.1 C0.7,2.9 1.3,3.5 2.1,3.5 C2.9,3.5 3.5,2.9 3.5,2.1 C3.5,1.3 2.9,0.7 2.1,0.7 C1.3,0.7 0.7,1.3 0.7,2.1" transform="translate(47 27)" />
                        <path d="M4.6,15.9 C2.2,15.9 0.3,14 0.3,11.6 C0.3,11.1 0.7,10.7 1.2,10.7 C1.7,10.7 2.1,11.1 2.1,11.6 C2.1,13 3.3,14.2 4.7,14.2 C6.1,14.2 7.3,13 7.3,11.6 C7.3,10.2 6.1,9 4.7,9 C2.3,9 0.4,7.1 0.4,4.7 C0.4,2.3 2.3,0.4 4.7,0.4 C7.1,0.4 9,2.3 9,4.7 C9,5.2 8.6,5.6 8.1,5.6 C7.6,5.6 7.2,5.2 7.2,4.7 C7.2,3.3 6,2.1 4.6,2.1 C3.2,2.1 2,3.3 2,4.7 C2,6.1 3.2,7.3 4.6,7.3 C7,7.3 8.9,9.2 8.9,11.6 C8.9,13.9 7,15.9 4.6,15.9" transform="translate(21 18)" />
                        <path d="M1.6,19.6 C1.1,19.6 0.7,19.2 0.7,18.7 L0.7,1.5 C0.7,1 1.1,0.6 1.6,0.6 C2.1,0.6 2.5,1 2.5,1.5 L2.5,18.7 C2.5,19.2 2.1,19.6 1.6,19.6" transform="translate(24 16)" />
                        <path fillRule="nonzero" d="M1.1,25.5 C1.1,25.5 1.1,25.5 1.1,25.5 C0.5,25.5 0,25 0,24.4 C0.8,11 11.9,0.5 25.3,0.5 C31.4,0.5 37.2,2.7 41.8,6.6 C42.3,7 42.3,7.7 41.9,8.2 C41.5,8.7 40.8,8.7 40.3,8.3 C36.1,4.7 30.8,2.7 25.2,2.7 C13,2.7 2.8,12.3 2.1,24.5 C2.2,25.1 1.7,25.5 1.1,25.5 Z" />
                      </g>
                    </g>
                    <path fill="#19D3C5" fillRule="nonzero" d="M46,92 C20.6,92 0,71.4 0,46 C0,20.6 20.6,0 46,0 C71.4,0 92,20.6 92,46 C92,71.4 71.4,92 46,92 Z M46,2 C21.7,2 2,21.7 2,46 C2,70.3 21.7,90 46,90 C70.3,90 90,70.3 90,46 C90,21.7 70.3,2 46,2 Z" />
                  </g>
                </svg>
              </div>
              <div className="gridlist__content">
                <h5 className="heading__xsmall">
                  Automatically process penalty fees for no-shows and late cancels
                </h5>
              </div>
            </li>
            <li className="gridlist__item gridlist__item-flex">
              <div className="gridlist__icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="92" height="92" viewBox="0 0 92 92">
                  <g fill="none" fillRule="evenodd">
                    <g fill="#31057C" transform="translate(25 21)">
                      <path d="M29.6,11.9 L28.5,12.5 L27.2,10.4 L28.3,9.8 C28.9,9.5 29.7,9.7 30,10.3 C30.4,10.8 30.1,11.5 29.6,11.9 Z M31,21.8 L13.7,24.3 L9.5,17.2 L20.3,3.5 L31,21.8 Z M16.3,33.8 L14.1,35 L10.3,28.6 L12.5,27.4 L16.3,33.8 Z M5.2,27.3 L2.7,23 C2.4,22.4 2.6,21.6 3.2,21.3 L7.6,18.7 L11.4,25.1 L7,27.7 C6.3,28.1 5.5,27.9 5.2,27.3 Z M27,7.6 L26,8.2 L21.6,0.7 C21.3,0.1 20.5,-0.1 19.9,0.3 C19.8,0.4 19.6,0.5 19.5,0.6 L7.2,16.1 L1.9,19.2 C0.1,20.2 -0.5,22.5 0.5,24.3 L3,28.5 C4,30.3 6.3,30.9 8.1,29.9 L8.2,29.9 L12.6,37.4 C12.9,38 13.7,38.2 14.3,37.9 L18.6,35.4 C19.2,35.1 19.4,34.3 19.1,33.7 L15,26.7 L33.2,24 C33.4,24 33.5,23.9 33.6,23.8 C34.2,23.5 34.4,22.7 34.1,22.1 L29.7,14.6 L30.8,14 C32.6,13 33.2,10.7 32.2,8.9 C31.2,7.1 28.8,6.5 27,7.6 Z" transform="translate(0 10)" />
                      <path d="M2.2,12 C2.1,12 2,12 1.9,12 C1.3,11.8 0.9,11.1 1,10.4 L2.7,2 C2.8,1.3 3.5,0.9 4.1,1 C4.7,1.2 5.1,1.9 5,2.6 L3.3,11 C3.2,11.6 2.7,12 2.2,12" transform="translate(25)" />
                      <path d="M1.2,7 C1,7 0.7,6.9 0.5,6.8 C1.38777878e-17,6.4 -0.1,5.7 0.3,5.1 L3,1.5 C3.3,1 4,0.8 4.5,1.2 C5,1.6 5.1,2.3 4.7,2.9 L2,6.5 C1.9,6.8 1.5,7 1.2,7" transform="translate(34 6)" />
                      <path d="M1.8,4.4 C1.2,4.4 0.7,4 0.5,3.4 C0.4,2.8 0.8,2.2 1.5,2 L11,0.3 C11.7,0.2 12.3,0.6 12.5,1.2 C12.6,1.8 12.2,2.4 11.5,2.6 L2,4.3 C1.9,4.4 1.8,4.4 1.8,4.4" transform="translate(37 17)" />
                      <path d="M6.8,4 C6.7,4 6.7,4 6.6,4 L2.1,3.4 C1.4,3.3 0.9,2.7 1,2 C1.1,1.3 1.7,0.9 2.4,1 L6.9,1.6 C7.6,1.7 8.1,2.3 8,3 C7.9,3.6 7.4,4 6.8,4" transform="translate(35 25)" />
                    </g>
                    <path fill="#19D3C5" fillRule="nonzero" d="M46,92 C20.6,92 0,71.4 0,46 C0,20.6 20.6,0 46,0 C71.4,0 92,20.6 92,46 C92,71.4 71.4,92 46,92 Z M46,2 C21.7,2 2,21.7 2,46 C2,70.3 21.7,90 46,90 C70.3,90 90,70.3 90,46 C90,21.7 70.3,2 46,2 Z" />
                  </g>
                </svg>
              </div>
              <div className="gridlist__content">
                <h5 className="heading__xsmall">
                  Design promotions that range from intro offers to flash sales to conversion
                  campaigns
                </h5>
              </div>
            </li>
            <li className="gridlist__item gridlist__item-flex">
              <div className="gridlist__icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="92" height="92" viewBox="0 0 92 92">
                  <g fill="none" fillRule="evenodd">
                    <g fill="#31057C" transform="translate(21 25)">
                      <path d="M12.2,17.2 C11.7,16.6 10.9,16.6 10.3,17.1 L8.2,19 C9.1,10 16.6,3 25.7,3 C31.8,3 37.4,6.2 40.7,11.4 C41.1,12 41.9,12.2 42.6,11.8 C43.2,11.4 43.4,10.6 43,9.9 C39.3,3.8 32.8,0.2 25.7,0.2 C15.2,0.2 6.5,8.4 5.5,18.9 L3.2,16.8 C2.7,16.3 1.8,16.3 1.3,16.9 C0.8,17.5 0.8,18.3 1.4,18.8 L6.8,23.8 L12,19.1 C12.6,18.6 12.7,17.8 12.2,17.2" />
                      <path d="M43.2,5.6 L37.8,0.6 L32.6,5.2 C32,5.7 32,6.6 32.5,7.1 C33,7.7 33.8,7.7 34.4,7.2 L37,5 C36.9,5.2 36.9,5.3 36.9,5.5 C36.9,15.3 29,23.3 19.3,23.3 C12.6,23.3 6.4,19.4 3.4,13.3 C3.1,12.6 2.3,12.3 1.6,12.7 C1,13 0.7,13.8 1.1,14.4 C4.4,21.5 11.6,26 19.3,26 C30.3,26 39.3,17 39.6,6 L41.4,7.7 C41.7,7.9 42,8 42.3,8 C42.7,8 43,7.9 43.3,7.6 C43.8,7 43.8,6.1 43.2,5.6" transform="translate(6 15)" />
                    </g>
                    <path fill="#19D3C5" fillRule="nonzero" d="M46,92 C20.6,92 0,71.4 0,46 C0,20.6 20.6,0 46,0 C71.4,0 92,20.6 92,46 C92,71.4 71.4,92 46,92 Z M46,2 C21.7,2 2,21.7 2,46 C2,70.3 21.7,90 46,90 C70.3,90 90,70.3 90,46 C90,21.7 70.3,2 46,2 Z" />
                  </g>
                </svg>
              </div>
              <div className="gridlist__content">
                <h5 className="heading__xsmall">
                  Attribute paid marketing campaigns to drive acquisition and retention
                </h5>
              </div>
            </li>
            <li className="gridlist__item gridlist__item-flex">
              <div className="gridlist__icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="92" height="92" viewBox="0 0 92 92">
                  <g fill="none" fillRule="evenodd">
                    <g fill="#31057C" transform="translate(31 21)">
                      <path d="M4.8,2.6 C3.4,2.6 2.3,3.8 2.3,5.2 L2.3,45.1 C2.3,46.5 3.4,47.7 4.8,47.7 L24.1,47.7 C25.5,47.7 26.6,46.5 26.6,45.1 L26.6,5.2 C26.6,3.8 25.5,2.6 24.1,2.6 L4.8,2.6 Z M24.1,50 L4.8,50 C2.2,50 0,47.8 0,45.1 L0,5.2 C0,2.5 2.2,0.3 4.8,0.3 L24.1,0.3 C26.8,0.3 28.9,2.5 28.9,5.2 L28.9,45.1 C29,47.8 26.8,50 24.1,50 Z" />
                      <path d="M2.3,2.7 L2.3,8 C2.3,9.5 3.4,10.6 4.8,10.6 L24.1,10.6 C25.5,10.6 26.6,9.4 26.6,8 L26.6,2.7 L2.3,2.7 Z M24.1,13 L4.8,13 C2.2,13 0,10.7 0,8 L0,1.5 C0,0.8 0.5,0.3 1.1,0.3 L27.8,0.3 C28.4,0.3 28.9,0.8 28.9,1.5 L28.9,8 C29,10.7 26.8,13 24.1,13 Z" transform="translate(0 37)" />
                      <path d="M2,0 C3.1,0 4,0.9 4,2 C4,3.1 3.1,4 2,4 C0.9,4 0,3.1 0,2 C0,0.9 0.9,0 2,0" transform="translate(13 42)" />
                      <path d="M6.8,2 L1.2,2 C0.5,2 0,1.6 0,1 C0,0.4 0.5,0 1.2,0 L6.8,0 C7.5,0 8,0.4 8,1 C8,1.6 7.5,2 6.8,2" transform="translate(11 6)" />
                      <path d="M4,16 C2.4,16 1.4,15.3 1,14.8 C-0.1,13.6 0.1,11.9 0.1,11.8 C0.2,11.2 0.7,10.7 1.3,10.8 C1.9,10.9 2.3,11.4 2.3,12 C2.3,12.2 2.3,12.9 2.7,13.3 C3,13.6 3.4,13.8 4.1,13.8 C5.3,13.8 5.6,13.3 5.7,13.1 C6.1,12.3 5.9,11.2 5.7,10.8 C5,10 4.1,9.5 3.2,9 C1.8,8.2 0,7.3 0,4.9 C0,3.4 0.6,2.2 1.8,1.5 C3.1,0.8 4.9,0.8 6.2,1.6 C7.2,2.2 7.7,3.1 7.7,4.2 C7.7,4.8 7.2,5.3 6.6,5.3 C6,5.3 5.5,4.8 5.5,4.2 C5.5,3.9 5.3,3.7 5.1,3.6 C4.5,3.2 3.5,3.2 2.9,3.5 C2.4,3.8 2.2,4.2 2.2,4.9 C2.2,5.8 2.7,6.2 4.2,7 C5.3,7.6 6.6,8.3 7.4,9.6 C8,10.5 8.4,12.5 7.5,14.1 C7.1,14.8 6.2,16 4,16" transform="translate(11 14)" />
                      <path d="M1,5 C0.4,5 0,4.5 0,3.9 L0,2 C0,1.4 0.4,0.9 1,0.9 C1.6,0.9 2,1.4 2,2 L2,3.9 C2,4.5 1.6,5 1,5" transform="translate(14 12)" />
                      <path d="M1,4 C0.4,4 0,3.5 0,3 L0,1 C0,0.4 0.4,0 1,0 C1.6,0 2,0.5 2,1 L2,3 C2,3.5 1.6,4 1,4" transform="translate(14 28)" />
                    </g>
                    <path fill="#19D3C5" fillRule="nonzero" d="M46,92 C20.6,92 0,71.4 0,46 C0,20.6 20.6,0 46,0 C71.4,0 92,20.6 92,46 C92,71.4 71.4,92 46,92 Z M46,2 C21.7,2 2,21.7 2,46 C2,70.3 21.7,90 46,90 C70.3,90 90,70.3 90,46 C90,21.7 70.3,2 46,2 Z" />
                  </g>
                </svg>
              </div>
              <div className="gridlist__content">
                <h5 className="heading__xsmall">
                  Target customers for timely acquisition, retention and upsell offers
                </h5>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
    <section className="section">
      <div className="media-object page-width">
        <div className="media-object__image media-object__image--left media-object__image--bleed-left media-object__large--tablet">
          <img src="/static/images/home-group2.png" alt=" " />
        </div>
        <div className="media-object__text gutter--none gutter--bottom ">
          <HeadingTitle
            title="Mobile Apps that Delight"
          />
          <p>
            Make your brand shine with Mariana’s industry-leading partner-branded iOS app that
            enables fast bookings with beautiful interactions and integrated branding. And for
            those who prefer a web experience, Mariana’s Web Integrations integrate seamlessly
            into your existing website to showcase your schedule, pricing, and customer account
            information - all within YOUR brand.
          </p>
        </div>
      </div>
    </section>

    <section className="section section--light-highlight">
      <div className="page-width">
        <HeadingTitle
          isOnDark
          headerSize="large"
          title="We'd Love to Hear From You"
          textWidth="large"
        />
        <p className="text-width--md align--left">
          We’d love the opportunity to show you our platform. Reach out to schedule
          a demo, or to simply learn more about us.
        </p>

        <Link href="/contact">
          <a className="button button--inverse">
            <span>
              Contact Us
            </span>
          </a>
        </Link>
      </div>
    </section>
  </Default>
);

export default indexPage;
