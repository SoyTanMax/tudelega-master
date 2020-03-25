import React, {Component} from 'react';
import icon from './icon.png';

import css from './GreySection.css'

class GreySection extends Component{
    render(){
    return <div>
        <div className={css.loremSection}>
        <div className={css.loremContainer}>
        <div className="columns">
          <div className="column is-two-fifths">
            <p className={css.neque}>Neque ultrices risus feugiat</p>
          </div>
          <div className="column">
            <img src={icon} alt="" className="image is-32x32"/>
            <p className={css.platea}>Platea gravida</p>
            <p className={css.sed}>Sed elementum est in nisi lorem tincidunt at morbi nisl mauris nam</p>
          </div>
          <div className="column">
            <img src={icon} alt="" className="image is-32x32"/>
            <p className={css.platea}>Platea gravida</p>
            <p className={css.sed}>Sed elementum est in nisi lorem tincidunt at morbi nisl mauris nam</p>
          </div>
          <div className="column">
            <img src={icon} alt="" className="image is-32x32"/>
            <p className={css.platea}>Platea gravida</p>
            <p className={css.sed}>Sed elementum est in nisi lorem tincidunt at morbi nisl mauris nam</p>
          </div>
        </div>
        </div>
      </div>
    </div>
    }
}

export default GreySection