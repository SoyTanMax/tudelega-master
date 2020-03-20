import React, { Component } from "react";
import design from './design.jpg';
import marketing from './marketing.png';
import code from './code.jpg';
import audio from './audifonos.jpg';

import css from './ServiceColumns.css';

class ServiceColumns extends Component{
    render(){
        return <div>
            <div className="container">
        <div className="columns">
          <div className="column">
            <div className="columns">
              <div className="column">
                <img src={design} alt=""/>
                <p className={css.serviceLabel}>Diseño gráfico</p>
                <p className={css.serviceDescription}>A condimentum nulla pretium, metus, in</p>
                <p className={css.servicePrice}><strong>$ 217 MXN</strong> por hora</p>
              </div>
              <div className="column">
                <img src={marketing} alt=""/>
                <p className={css.serviceLabel}>Diseño gráfico</p>
                <p className={css.serviceDescription}>Proin eu, risus vel vel sagittis suspendisse cursus urna, viverra vitae egstas</p>
                <p className={css.servicePrice}><strong>$ 217 MXN</strong> por hora</p>
              </div>
            </div>
          </div>
          <div className="column">
            <div className="columns">
              <div className="column">
                <img src={code} alt=""/>
                <p className={css.serviceLabel}>Diseño gráfico</p>
                <p className={css.serviceDescription}>Diam pretium aliquam euismod vitae leo, non feugiat turpis in pharetra neque dui in consequat sit pellentesque proin</p>
                <p className={css.servicePrice}><strong>$ 217 MXN</strong> por hora</p>
              </div>
              <div className="column">
                <img src={audio} alt=""/>
                <p className={css.serviceLabel}>Diseño gráfico</p>
                <p className={css.serviceDescription}>Te diseño tu marca personal</p>
                <p className={css.servicePrice}><strong>$ 217 MXN</strong> por hora</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    }
}

export default ServiceColumns