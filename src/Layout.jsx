import './App.css';
import Home from './componets/home';
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


const Layout = ({ QQQ })=> {

    const menus = [
        {
            name: 'ГЛАВНАЯ',
            links: '/'

        },
        {
            name: 'О КОМПАНИИ',
            links: '/еkologicheskoe-soprovozhdenie'

        },
        {
            name: 'УСЛУГИ',
            name2 : {
                name: 'О КОМПАНИИ',
                links: '/еkologicheskoe-soprovozhdenie'
            },
        },
        {
            name: 'КОНТАКТЫ',
            links: 'EkoSopr'
        }
    ];

    console.log(menus);
    return (
        <>
            <Burger pageWrapId={'page-wrap'} outerContainerId={'outer-container'} menus={menus}/>
            <div className='main'>
                <div className='menu'>
                    <ul>
                        {menus.map((menus) => (
                            <li>
                                <ins>
                                <NavLink as={NavLink} to={menus.links}>
                                    {menus.name}
                                </NavLink>
                                </ins>
                                {/*<ins>{menu}</ins>*/}
                            </li>
                        ))}
                    </ul>

                </div>


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



            </div>
        </>


    );
}

export default Layout;
