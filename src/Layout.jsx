import './App.css';
import Footer from './componets/footer';
import {Outlet, NavLink} from "react-router-dom";
import {FadeIn} from "react-slide-fade-in";


import Burger from './componets/burger';


import Logo from './img/logo.png'
import Telephone from './img/telephone.png'
import menuBeg from './img/vol.png'
import styled from "styled-components";


const HeaderLine = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  align-items: center;
  padding-bottom: 4em;
  text-align: center;
  @media screen and  (max-width: 750px) {
    grid-template-columns: 1fr  1fr;
    margin-top: 1em;
  };
  @media screen and  (max-width: 530px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
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

const TextMarjin = styled.p`
  margin-right: 2em;
  padding-left: 2em;
`;

const BurgerStyle = styled.div`
  overflow: hidden;
  @media screen and  (min-width: 960px) {
    display: none;
  };
`;
const MenuStyle = styled.div`
  background-image: url(${menuBeg});
  background-position-x: left;
  background-position-y: bottom;
  background-size: 86px;
  background-repeat-x: repeat;
  background-repeat-y: no-repeat;
  @media screen and  (max-width: 960px) {
    display: none;
  };
`;

const MenuStyleUl = styled.div`
  display: flex;
  justify-content: space-evenly;
  list-style: none;
  margin-top: 0;
  padding-bottom: 2em;
  padding-top: 2em;
  margin-right: 2em;
  margin-left: 2em;

`;

const Layout = ({QQQ}) => {

    const menus = [
        {
            name: 'Главная',
            links: '/',
            id: 1,
        },
        {
            name: 'Проектная документация',
            links: '/development',
            id: 2,
        },

        {
            name: 'Экологическая отчетность',
            links: 'reporting',
            id: 3,
        },
        {
            name: ' Дополнительные услуги',
            links: 'additionall',
            id: 4,
        },
        {
            name: ' Учебный центр',
            links: 'training',
            id: 5,
        },
        {
            name: 'Контакты',
            links: 'contacts',
            id: 6,
        }
    ];

    return (
        <>
            <BurgerStyle>
                <Burger pageWrapId={'page-wrap'} outerContainerId={'outer-container'} items={menus}/>
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

                <FadeIn
                    from="bottom"
                    positionOffset={0}
                    triggerOffset={0}
                    delayInMilliseconds={400}
                >
                    <div className='hedd'>

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
                            <TextMarjin> Адрес: г. Рязань, Первомайский проспект, д. 7, оф. 15 </TextMarjin>

                        </HeaderLine>

                    </div>
                </FadeIn>
                <Outlet/>
                <Footer/>
            </div>
        </>


    );
}

export default Layout;
