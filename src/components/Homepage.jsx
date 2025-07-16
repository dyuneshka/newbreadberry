import React, { useState } from "react";
import '../scss/homepage.scss'
import '../scss/global.scss'
import Croissantwithhocolate from '../img/Круасан с шоколадом.jpg'







const Homepage = () => {
    return (
        <div className="main">
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
                    </div>
                </div>
            </section>   
            <section class="advantages">
                <div class="container">
                    <h2 class="title advantaged_title">Наши преимущества</h2>
                    <ul class="advantages_content">
                        <div class="advantages_content-up flex">
                            <li class="advantages_content-item">
                                <div class="advantages_content-img hero_img1"></div>
                                Широкий ассортимент
                            </li>
                            <li class="advantages_content-item">
                                <div class="advantages_content-img hero_img2"></div>
                                Высокое качество продукции
                            </li>
                            <li class="advantages_content-item">
                                <div class="advantages_content-img hero_img3"></div>
                                Уютная атмосфера в кафе
                            </li>
                        </div>
                        <div class="advantages_content-dawn flex">
                            <li class="advantages_content-item">
                                <div class="advantages_content-img hero_img4"></div>
                                Доставка по всему Грозному
                            </li>
                            <li class="advantages_content-item">
                                <div class="advantages_content-img hero_img5"></div>
                                Индивидуальный подход
                            </li>
                            <li class="advantages_content-item">
                                <div class="advantages_content-img hero_img6"></div>
                                Демократичная ценовая политика
                            </li>
                        </div>
                    </ul>
                </div>
            </section>
            <section id="Us" class="AboutUs">
                <div class="container">
                    <h2 class="title AboutUs_title">О нас</h2>
                    <div class="AboutUs_content">
                        <div class="AboutUs_content-descr">
                            <p class="AboutUs-descr">
                                Наши пекари — настоящие профессионалы и знатоки своего дела, 
                                виртуозно владеющие искусством хлебопечения и всей душой любящие 
                                свое ремесло. Знание технологий и рецептур как при изготовлении 
                                классического ассортимента хлебобулочных изделий, так и при 
                                разработке оригинальной продукции делают нашу выпечку такой 
                                уникальной, вкусной и востребованной.

                            </p>
                            <p class="AboutUs-descr">
                                Мы заботимся о наших гостях и стараемся принять во внимание все пожелания, 
                                с удовольствием учитывая новые идеи в нашем ежедневном процессе производства! 
                            </p>
                        </div>
                        <div class="AboutUs_content-img"></div>
                    </div>
                </div>
            </section>
            <section class="categories">
            <div class="container">
                <h2 class="title categories_title">Популярное из категорий</h2>
                
            </div>
        </section>    

        </div>
    )
}

export default Homepage