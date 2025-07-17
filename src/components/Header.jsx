import React from "react"
import logo from "../img/Logo.svg"
import '../scss/header.scss'

const Header = () => {
    return (
        <div>
        <header className="header">
            <a href="#" className="header_logo_link">
                <img src = {logo} alt="BREADBERRY кафе-пекарня" className="header_logo"/>
            </a>
            <nav className="nav">
                <ul className="header_nav_list flex">
                    <li className="header_nav_item">
                        <a href="#" className="header_nav_link">Главная</a>
                    </li>
                    <li className="header_nav_item">
                        <a href="" className="header_nav_link">Сделать заказ</a>
                        <div className="dropdown-content">
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
                    <li className="header_nav_item">
                        <a href="#Us" className="header_nav_link">О нас</a>
                    </li>
                    <li className="header_nav_item">
                        <a href="#Stocks" className="header_nav_link">Акции</a>
                    </li>
                    <li className="header_nav_item">
                        <a href="https://zoon.ru/grozny/restaurants/kafe-pekarnya_breadberry/" className="header_nav_link">Отзывы</a>
                    </li>
                    <li className="header_nav_item">
                        <a href="#cont" className="header_nav_link">Контакты</a>
                    </li>
                </ul>
            </nav>
    </header>
        </div>
    )
}

export default Header