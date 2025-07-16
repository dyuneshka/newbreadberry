import React from "react"
import logo from '../img/Logo.svg'; 
import '../scss/header.scss'

const Header = () => {
    return (
        <div>
        <header class="header">
            <a href="#" class="header_logo_link">
                <img src = {logo} alt="BREADBERRY кафе-пекарня" class="header_logo"/>
            </a>
            <nav class="nav">
                <ul class="header_nav_list flex">
                    <li class="header_nav_item">
                        <a href="#" class="header_nav_link">Главная</a>
                    </li>
                    <li class="header_nav_item">
                        <a href="" class="header_nav_link">Сделать заказ</a>
                        <div class="dropdown-content">
                            <a href="./Весь ассортимент.html">Весь ассортимент</a>
                            <a href="./Венская выпечка.html">Венская выпечка</a>
                            <a href="./Выпечка.html">Выпечка</a>
                            <a href="./Осетинские пироги.html">Осетинские пироги</a>
                            <a href="./Пицца.html">Пиццы</a>
                            <a href="./Сэндвичи.html">Сэндвичи</a>
                            <a href="./Напитки.html">Напитки</a>
                            <a href="./Хлеб.html">Хлеб</a>  
                        </div>
                    </li>
                    <li class="header_nav_item">
                        <a href="#Us" class="header_nav_link">О нас</a>
                    </li>
                    <li class="header_nav_item">
                        <a href="#Stocks" class="header_nav_link">Акции</a>
                    </li>
                    <li class="header_nav_item">
                        <a href="https://zoon.ru/grozny/restaurants/kafe-pekarnya_breadberry/" class="header_nav_link">Отзывы</a>
                    </li>
                    <li class="header_nav_item">
                        <a href="#cont" class="header_nav_link">Контакты</a>
                    </li>
                </ul>
            </nav>
    </header>
        </div>
    )
}

export default Header