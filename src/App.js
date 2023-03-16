import './App.css';
import Home from './componets/home';
import {AnimateContainer} from 'react-animate-container';

import Burger from './componets/burger';

import Logo from './img/logo.png'
import Telephone from './img/telephone.png'


const menu = [
    'ГЛАВНАЯ', 'О КОМПАНИИ', 'УСЛУГИ', 'КОНТАКТЫ'
];


function App() {
    return (
        <>
            <Burger pageWrapId={'page-wrap'} outerContainerId={'outer-container'} />
            <div className='main'>
                <div className='menu'>
                    <ul>
                        {menu.map((book) => (
                            <li>
                                <ins>{book}</ins>
                            </li>
                        ))}
                    </ul>

                </div>


                <AnimateContainer.fadeInDown>
                    <header>

                        <div className='headerLine'>

                            <a className='telLink' href="tel:+79605761557">
                                <img className='telIcon' src={Telephone} alt="номер телефона"/>
                                <p> +7(960) 57-615-57</p>


                            </a>
                            <div className='logo'>
                                <h5>Экологическое сопровождение вашего бизнеса

                                </h5>

                                <img src={Logo} alt="Логотип"/>


                            </div>
                            <p>Адрес: г. Рязань, Первомайский проспект, д. 7, оф. 15</p>

                        </div>


                    </header>
                </AnimateContainer.fadeInDown>


                <Home/>


            </div>
        </>


    );
}

export default App;
