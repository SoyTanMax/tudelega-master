import React, { Component } from 'react';


import css from './ExploreButton.css';

class ExploreButton extends Component{
    render() {
        return <div className={css.exploreButton}>
            <p className={css.exploreText}>Explora lorem ipsum  <i className="fas fa-chevron-right is-size-7"></i></p>      
        </div>
    }
}

export default ExploreButton