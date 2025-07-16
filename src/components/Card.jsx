import React from "react";

const Card = () => {
    return(
        <div>
            <div class="card-content">
                 <img src= {Croissantwithhocolate} alt="Круассан с шоколадом" class="card-img"/>
                <div class="card-desription">
                    <h3 class="card-title">Круассан с шоколадом</h3>
                    <p class="card-descr">Слоеное тесто, шоколад</p>
                    <div class="price">
                        <span>Цена:</span>
                        <span>270.р</span>
                    </div>
                    <div class="buttons">
                        <button class="card-btn btn btn-reset">Добавить в корзину</button>
                     </div>
                
                </div>
            </div>
        </div>
    )
}