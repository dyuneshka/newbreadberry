import React from "react";
import "../../scss/card.scss"
import "../../scss/global.scss"

const Card = ({data}) => {
    return(

       <div className="card-content">
            <img src= {data.Image} alt="Круассан с шоколадом" className="card-img"/>
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