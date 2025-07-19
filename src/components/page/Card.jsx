import React from "react";
import "../../scss/card.scss"
import "../../scss/global.scss"

const Card = ({data}) => {

   const imageSrc = data.Image && data.Image.trim() !== ''
  ? (() => {
      try {
        return require(`../../img/${data.Image}`);
      } catch {
        return require(`../../img/default.png`);
      }
    })()
  : require(`../../img/default.png`);

    const isDefault = data.Image === '' || data.Image === null;

   return(

       <div className="card-content">
            <img src= {imageSrc} alt= {data.title} className="card-img"  style={isDefault
            ? { width: '150px', height: '150px', objectFit: 'contain' }
            : { width: '100%', height: '300px', objectFit: 'cover' }}/>
            <div className="card-desription">
                <h3 className="card-title">{data.title}</h3>
                <p className="card-descr">С{data.description}</p>
                <div className="price">
                    <span>Цена:</span>
                    <span>{data.price}.р</span>
                </div>
                <div className="buttons">
                    <button className="card-btn btn btn-reset">Добавить в корзину</button>
                </div>
            </div>
        </div>
    )
}

export default Card