import React, { Component } from "react";
import categorias from './CarouselData/CarouselData'
import css from './Carousel.css'


class Carousel extends Component {

  render() {
    return (
      <div className="columns">
          {categorias.map((detalles, index) => {
            return <div className={css.categoria} key={detalles.id}>
              <img className={css.carouselImage} src={detalles.icon} alt=""/>
              <label className={css.carouselLabel}>{detalles.title}</label>
              <p className={css.content}>{detalles.content}</p>
            </div>
          })}
      </div>
    );
  }
}

export default Carousel