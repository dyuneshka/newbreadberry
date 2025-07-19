import React, { useState } from "react";
import '../../scss/homepage.scss'
import '../../scss/global.scss'
import Card from './Card'
import Map from "../map/map"
import { Link } from "react-router-dom";





const Homepage = ({data}) => {
    return (
        <div className="main">
            <section className="hero">
                <div className="container">
                    <div className="hero_content">
                        <h1 className="hero_title">
                            Уютная кафе-пекарня BREADBERRY!
                        </h1>
                        <p className="hero-descr">
                            предлагает своим посетителям окунуться в атмосферу вкусной еды 
                            и прохладных напитков. Здесь можно быстро и недорого перекусить как 
                            в одиночестве, так и с друзьями или семьей.
                        </p>
                    </div>
                </div>
            </section>   
            <section className="advantages">
                <div className="container">
                    <h2 className="title advantaged_title">Наши преимущества</h2>
                    <ul className="advantages_content">
                        <div className="advantages_content-up flex">
                            <li className="advantages_content-item">
                                <div className="advantages_content-img hero_img1"></div>
                                Широкий ассортимент
                            </li>
                            <li className="advantages_content-item">
                                <div className="advantages_content-img hero_img2"></div>
                                Высокое качество продукции
                            </li>
                            <li className="advantages_content-item">
                                <div className="advantages_content-img hero_img3"></div>
                                Уютная атмосфера в кафе
                            </li>
                        </div>
                        <div className="advantages_content-dawn flex">
                            <li className="advantages_content-item">
                                <div className="advantages_content-img hero_img4"></div>
                                Доставка по всему Грозному
                            </li>
                            <li className="advantages_content-item">
                                <div className="advantages_content-img hero_img5"></div>
                                Индивидуальный подход
                            </li>
                            <li className="advantages_content-item">
                                <div className="advantages_content-img hero_img6"></div>
                                Демократичная ценовая политика
                            </li>
                        </div>
                    </ul>
                </div>
            </section>
            <section id="Us" className="AboutUs">
                <div className="container">
                    <h2 className="title AboutUs_title">О нас</h2>
                    <div className="AboutUs_content">
                        <div className="AboutUs_content-descr">
                            <p className="AboutUs-descr">
                                Наши пекари — настоящие профессионалы и знатоки своего дела, 
                                виртуозно владеющие искусством хлебопечения и всей душой любящие 
                                свое ремесло. Знание технологий и рецептур как при изготовлении 
                                классического ассортимента хлебобулочных изделий, так и при 
                                разработке оригинальной продукции делают нашу выпечку такой 
                                уникальной, вкусной и востребованной.

                            </p>
                            <p className="AboutUs-descr">
                                Мы заботимся о наших гостях и стараемся принять во внимание все пожелания, 
                                с удовольствием учитывая новые идеи в нашем ежедневном процессе производства! 
                            </p>
                        </div>
                        <div className="AboutUs_content-img"></div>
                    </div>
                </div>
            </section>
            <section className="categories">
                <div className="container">
                    <h2 className="title categories_title">Популярное из категорий</h2>
                            <div className="card_product categories_content">
                                {data.map((item) => (
                                    <Card key = {item.id} data = {item}/>
                                ))}
                                <div className="more">
                                <Link to="/assortment" className="categories_link">
                                    Посмотреть больше предложений
                                    <svg  className="categories_svg"  width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g clip-path="url(#clip0_76_98)">
                                        <path d="M25 0C20.0555 0 15.222 1.46622 11.1108 4.21326C6.99953 6.96029 3.79521 10.8648 1.90302 15.4329C0.010832 20.0011 -0.484251 25.0277 0.480379 29.8773C1.44501 34.7268 3.82603 39.1814 7.32234 42.6777C10.8187 46.174 15.2732 48.555 20.1228 49.5196C24.9723 50.4843 29.9989 49.9892 34.5671 48.097C39.1353 46.2048 43.0397 43.0005 45.7868 38.8893C48.5338 34.778 50 29.9445 50 25C49.9928 18.3718 47.3565 12.0172 42.6697 7.33032C37.9828 2.64348 31.6282 0.00723772 25 0ZM25 47.6562C20.519 47.6562 16.1387 46.3275 12.4129 43.838C8.68707 41.3485 5.78316 37.8101 4.06837 33.6702C2.35357 29.5303 1.9049 24.9749 2.77909 20.58C3.65329 16.1851 5.81109 12.1481 8.97962 8.97961C12.1482 5.81108 16.1851 3.65328 20.58 2.77908C24.9749 1.90489 29.5303 2.35356 33.6702 4.06835C37.8101 5.78315 41.3485 8.68706 43.838 12.4129C46.3275 16.1387 47.6563 20.519 47.6563 25C47.649 31.0066 45.2597 36.7651 41.0124 41.0124C36.7651 45.2597 31.0066 47.649 25 47.6562Z" fill="black"/>
                                        <path d="M22.7032 14.0157C22.481 13.8087 22.1872 13.696 21.8836 13.7014C21.58 13.7067 21.2904 13.8297 21.0756 14.0444C20.8609 14.2591 20.738 14.5488 20.7326 14.8524C20.7272 15.156 20.8399 15.4498 21.0469 15.6719L30.3751 25.0001L21.0469 34.3282C20.9318 34.4355 20.8394 34.5648 20.7754 34.7086C20.7113 34.8523 20.6769 35.0075 20.6741 35.1649C20.6714 35.3222 20.7003 35.4785 20.7592 35.6244C20.8182 35.7704 20.9059 35.9029 21.0172 36.0142C21.1285 36.1255 21.261 36.2132 21.4069 36.2721C21.5529 36.3311 21.7091 36.36 21.8665 36.3572C22.0238 36.3545 22.179 36.32 22.3228 36.256C22.4665 36.1919 22.5959 36.0996 22.7032 35.9844L32.8594 25.8282C33.0789 25.6085 33.2022 25.3106 33.2022 25.0001C33.2022 24.6895 33.0789 24.3917 32.8594 24.1719L22.7032 14.0157Z" fill="black"/>
                                        </g>
                                        <defs>
                                        <clipPath id="clip0_76_98">
                                        <rect width="50" height="50" fill="white"/>
                                        </clipPath>
                                        </defs>
                                    </svg>   
                                </Link>                         
                            </div>
                        </div>      
                </div>
             </section>  
            <section className="stocks">
                <div className="container">
                    <h2 className="title stocks_title">Акции и скидки</h2>
                    <div className="stocks_content">
                        <div className="stocks_content-left">
                            <span className="stocks_text">Скидка 10% в День рождения (3 дня до и 3 дня после Дня рождения)</span>
                            <span className="stocks_text">Скидка 10% при заказе от 3 500 рублей</span>
                            <span className="stocks_text">Скидка 5% пенсионерам</span>
                            <span className="stocks_text">Каждая 6-я чашка кофе в подарок </span>
                            <span className="stocks_text">Доставка по Грозному при заказе от 800 рублей - БЕСПЛАТНО</span>
                            <button className="hero-btn btn ">Заказать</button>
                        </div>
                        <div className="sctocks_content-right"></div>
                    </div>
                </div>
            </section>
            <section id="cont" class="Contacts">
                <div class="container">
                 <h2 class="title contacts_title">Контакты</h2>
                    <div class="Contctns_content">
                        <div class="Contacts_content-left">
                            <span class="Contacts_text">Ежедневно с 8.00 до 00.00 без перерыва и выходных</span>
                            <span class="Contacts_text">Приём заказов на доставку и самовывоз ежедневно с 8.00 до 22.00</span>
                            <address class="Contacts_address">Наш адрес : ул. Г.А. Угрюмова, 72, Грозный</address>
                            <a href="tel:+79928882299" class="Contacts_telephone">Телефон: +7 (992) 888-22-99</a>
                            <a href="tel:+79667270009" class="Contacts_telephone">Телефон: +7 (966) 727-00-09</a>
                         </div>
                        <Map/>
                    </div>
                 </div>
            </section>
        </div>    
    )
    
}

export default Homepage