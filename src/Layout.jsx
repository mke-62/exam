import './App.css';
import Footer from './componets/footer';
import {AnimateContainer} from 'react-animate-container';
import { Outlet, NavLink } from "react-router-dom";



import Burger from './componets/burger';

import Logo from './img/logo.png'
import Telephone from './img/telephone.png'
import styled from "styled-components";


const HeaderLine = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  align-items: center;
  padding-bottom: 4em;
  text-align: center;
  @media screen and  (max-width: 750px) {
    grid-template-columns: 1fr  1fr;

  };
`;

const Logos = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;


  @media screen and  (max-width: 750px) {
    order: +1;
    grid-column-start: 1;
    grid-column-end: 3;

  };

`;
const LogosImg = styled.img`
  width: 19em;
`;
const BurgerStyle  = styled.div`
  overflow: hidden;
  @media screen and  (min-width: 960px){
    display: none;
  };
`;
const MenuStyle  = styled.div`
  background-image: url('./img/vol.png') ;
  background-position-x: left ;
  background-position-y: bottom;
  background-size: 86px;
  background-repeat-x: repeat;
  background-repeat-y: no-repeat;
  @media screen and  (max-width: 960px){
    display: none;
  };
`;
const MenuStyleUl  = styled.div`
  display: flex;
  justify-content: space-evenly;
  list-style: none;
  margin-top: 0;
  padding-bottom: 2em;
  padding-top: 2em;
`;


const Layout = ({ QQQ })=> {

    const menus = [
        {
            name: 'Главная',
            links: '/'

        },
        {
            name: 'Проектная документация',
            links: '/development'

        },

        {
            name: 'Экологическая отчетность',
            links: 'reporting'
        },
        {
            name: ' Дополнительные услуги',
            links: 'additionall'
        },
        {
            name: ' Учебный центр',
            links: 'training'
        },
        {
            name: 'Контакты',
            links: 'contacts'
        }
    ];

    return (
        <>
            <BurgerStyle>
                <Burger pageWrapId={'page-wrap'} outerContainerId={'outer-container'} menus={menus}/>
            </BurgerStyle>
            <div className='main'>
                <MenuStyle>
                    <MenuStyleUl>
                        {menus.map((menus) => (
                            <li key={menus.id}>
                                <NavLink as={NavLink} to={menus.links}>
                                    {menus.name}
                                </NavLink>
                            </li>
                        ))}
                    </MenuStyleUl>

                </MenuStyle>


                <AnimateContainer.fadeInDown>
                    <header>

                        <HeaderLine>

                            <a className='telLink' href="tel:+79605761557">
                                <img className='telIcon' src={Telephone} alt="номер телефона"/>
                                <p> +7(960) 57-615-57</p>


                            </a>
                            <Logos>
                                <h5>Экологическое сопровождение вашего бизнеса

                                </h5>

                                <LogosImg src={Logo} alt="Логотип"/>


                            </Logos>
                            <p>Адрес: г. Рязань, Первомайский проспект, д. 7, оф. 15</p>

                        </HeaderLine>


                    </header>
                </AnimateContainer.fadeInDown>

                <Outlet />

                <Footer />



            </div>
        </>


    );
}

export default Layout;
