import React, { Component } from "react";
import categorias from './CarouselData2/CarouselData2'
import css from './Carousel2.css'


class Carousel extends Component {

  render() {
    return (
      <div className="columns">
          {categorias.map((detalles, index) => {
            return <div className={css.categoria} key={detalles.id}>
              <img className={css.carouselImage} src={detalles.icon} alt=""/>
              <label className={css.carouselLabel}>{detalles.title}</label>
              <p className={css.content}>{detalles.content}</p>
              <p className={css.price}>{detalles.price}</p>
            </div>
          })}
      </div>
    );
  }
}

export default Carousel