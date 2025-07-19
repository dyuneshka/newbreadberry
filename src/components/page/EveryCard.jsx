import React from "react";
import "../../scss/homepage.scss"
import Card from "./Card"

const EveryCard = ({data}) => {
    return(
        <main class="main">
            <section class="hero">
                <div class="container">
                    <div class="hero_content">
                        <h1 class="hero_title">
                            Уютная кафе-пекарня BREADBERRY!
                        </h1>
                        <p class="hero-descr">
                            предлагает своим посетителям окунуться в атмосферу вкусной еды 
                            и прохладных напитков. Здесь можно быстро и недорого перекусить как 
                            в одиночестве, так и с друзьями или семьей.
                        </p>
                        <button class="hero-btn btn btn-reset">Заказать</button>
                    </div>
                </div>
            </section>
                    <div className="card_product categories_content">
                        {data.map((item) => (
                            <Card key = {item.id} data = {item}/>
                        ))}
                                
                    </div>  


        </main>
    )
}

export default EveryCard