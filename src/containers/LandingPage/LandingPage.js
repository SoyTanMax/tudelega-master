import React from 'react';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { injectIntl, intlShape } from '../../util/reactIntl';
import { isScrollingDisabled } from '../../ducks/UI.duck';
import config from '../../config';
import GreySection from '../../components/GreySection/GreySection';
import ServiceColumns from '../../components/ServiceColumns/ServiceColumns';
import ExploreButton from '../../components/ExploreButton/ExploreButton'

import {
  Page,
  SectionHero,
  SectionLocations,
  LayoutWrapperTopbar,
  LayoutWrapperFooter,
  Footer,
} from '../../components';
import { TopbarContainer } from '../../containers';

import facebookImage from '../../assets/saunatimeFacebook-1200x630.jpg';
import twitterImage from '../../assets/saunatimeTwitter-600x314.jpg';
import css from './LandingPage.css';

export const LandingPageComponent = props => {
  const { history, intl, location, scrollingDisabled } = props;

  // Schema for search engines (helps them to understand what this page is about)
  // http://schema.org
  // We are using JSON-LD format
  const siteTitle = config.siteTitle;
  const schemaTitle = intl.formatMessage({ id: 'LandingPage.schemaTitle' }, { siteTitle });
  const schemaDescription = intl.formatMessage({ id: 'LandingPage.schemaDescription' });
  const schemaImage = `${config.canonicalRootURL}${facebookImage}`;

  return (
    <Page
      className={css.root}
      scrollingDisabled={scrollingDisabled}
      contentType="website"
      description={schemaDescription}
      title={schemaTitle}
      facebookImages={[{ url: facebookImage, width: 1200, height: 630 }]}
      twitterImages={[
        { url: `${config.canonicalRootURL}${twitterImage}`, width: 600, height: 314 },
      ]}
      schema={{
        '@context': 'http://schema.org',
        '@type': 'WebPage',
        description: schemaDescription,
        name: schemaTitle,
        image: [schemaImage],
      }}
    >
      <div className="hero is-fullheight">
        <div className="hero-head">
          <LayoutWrapperTopbar>
            <TopbarContainer />
          </LayoutWrapperTopbar>
        </div>
        <div className={css.heroContainer}>
          <SectionHero className={css.hero} history={history} location={location} />
        </div>
      </div>
      <div className={css.carouselContainer}>
        <Carousel/>
      </div>
      <div className={css.loremContainer}>
        <p className={css.loremTitle}>Lorem Ipsum</p>
        <p className={css.loremSubtitle}>Turpis sit a habitant et magnis</p>
      </div>
      <div className={css.serviceContainer}>
        <ServiceColumns/>
        <ServiceColumns/>
      </div>
      <div className={css.exploreContainer}>
        <ExploreButton/>
      </div>
      <GreySection/>
      <div className={css.loremContainer}>
        <p className={css.loremTitle}>Lorem Ipsum</p>
        <p className={css.loremSubtitle}>Turpis sit a habitant et magnis</p>
      </div>
      <div className={css.serviceContainer}>
        <ServiceColumns/>
        <ServiceColumns/>
      </div>
      <div className={css.exploreContainer}>
        <ExploreButton/>
      </div>
      <div className={css.loremContainer}>
        <p className={css.loremTitle}>Lorem Ipsum</p>
        <p className={css.loremSubtitle}>
          Nunc in egestas cras auctor magna viverra quam egestas in sed augue ac quis in aenean <br></br>
          ac faucibus rhoncus aliquet ultrices fringilla sapien donec
        </p>
      </div>
      <div className={css.serviceContainer}>
        <ServiceColumns/>
      </div>
      <div className={css.exploreContainer}>
        <ExploreButton/>
      </div>
          <ul className={css.sections}>
            <li className={css.section}>
              <div className={css.sectionContentFirstChild}>
                <SectionLocations />
              </div>
            </li>
          </ul>
        <LayoutWrapperFooter>
          <Footer />
        </LayoutWrapperFooter>
    </Page>
  );
};

const { bool, object } = PropTypes;

LandingPageComponent.propTypes = {
  scrollingDisabled: bool.isRequired,

  // from withRouter
  history: object.isRequired,
  location: object.isRequired,

  // from injectIntl
  intl: intlShape.isRequired,
};

const mapStateToProps = state => {
  return {
    scrollingDisabled: isScrollingDisabled(state),
  };
};

// Note: it is important that the withRouter HOC is **outside** the
// connect HOC, otherwise React Router won't rerender any Route
// components since connect implements a shouldComponentUpdate
// lifecycle hook.
//
// See: https://github.com/ReactTraining/react-router/issues/4671
const LandingPage = compose(
  withRouter,
  connect(mapStateToProps),
  injectIntl
)(LandingPageComponent);

export default LandingPage;
