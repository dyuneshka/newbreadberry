import React from "react"
import logo from "../img/Logo.svg"
import '../scss/header.scss'
import { Link } from "react-router-dom"

const Header = () => {
    return (
 
        <header className="header">
            <Link to="/" className="header_logo_link">
                <img src = {logo} alt="BREADBERRY кафе-пекарня" className="header_logo"/>
            </Link>
            <nav className="nav">
                <ul className="header_nav_list flex">
                    <li className="header_nav_item">
                        <Link to = "/" className="header_nav_link">Главная</Link>
                    </li>
                    <li className="header_nav_item">
                        <Link to ="/assortment" className="header_nav_link">Сделать заказ</Link>
                        <div className="dropdown-content">
                            <Link to="/assortment">Весь ассортимент</Link>
                            <Link to="/Венская выпечка">Венская выпечка</Link>
                            <Link to="/Выпечка">Выпечка</Link>
                            <Link to="/Осетинские пироги">Осетинские пироги</Link>
                            <Link to="/Пицца">Пиццы</Link>
                            <Link to="/Сэндвичи">Сэндвичи</Link>
                            <Link to="/Напитки">Напитки</Link>
                            <Link to="/Хлеб">Хлеб</Link>  
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

    )
}

export default Header