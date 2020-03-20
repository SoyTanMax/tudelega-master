import React from 'react';
import { string } from 'prop-types';
import { FormattedMessage } from '../../util/reactIntl';
import classNames from 'classnames';
import { NamedLink } from '../../components';
import heroIcons from './heroIcons.png'

import css from './SectionHero.css';

const SectionHero = props => {
  const { rootClassName, className } = props;

  const classes = classNames(rootClassName || css.root, className);

  return (
    <div className={classes}>
      <div className="hero">
        <div className="columns">
          <div className="column is-pulled-left is-full-mobile">
            <div className={css.searchService}>
                <h1 className={css.heroMainTitle}>
                  <FormattedMessage id="SectionHero.title" />
                </h1>
                <div className={css.field}>
                    <p className={css.label}>
                      <FormattedMessage id="SectionHero.servicio"/>
                    </p>             
                  <div className={css.control}>
                      <input className={css.input} type="text" placeholder="¿Qué servicio estás buscando?"></input>
                  </div>
                </div>
                <div className={css.field}>
                    <p className={css.label}>
                      <FormattedMessage id="SectionHero.categoria"/>
                    </p>
                    <div className={css.control}>
                      <input className={css.input} type="text" placeholder="Cualquier categoría"></input>
                    </div>
                </div>
                <div className={css.buttonContainer}>
                    <NamedLink
                      name="SearchPage"
                      to={{
                        search:
                          'address=Finland&bounds=70.0922932%2C31.5870999%2C59.693623%2C20.456500199999937',
                      }}
                      className={css.heroButton}
                      >
                      <FormattedMessage id="SectionHero.browseButton" />
                    </NamedLink>
                </div>
            </div>
          </div>
          <div className="column is-5 is-hidden-mobile">
            <img className={css.heroImage} src={heroIcons} alt=""/>
          </div>
          <div className="column is-1 is-hidden-mobile"></div>
        </div>
      </div>
    </div>
  );
};

SectionHero.defaultProps = { rootClassName: null, className: null };

SectionHero.propTypes = {
  rootClassName: string,
  className: string,
};

export default SectionHero;
