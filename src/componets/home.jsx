import styled from 'styled-components';
import Form from './formic';


import Icon1 from '../img/icon1.png'
import Headerimg from '../img/background.jpg'
import Footerimg from '../img/background2.jpg'

import YandexMap from './yandexmap'
import Telephone from "../img/telephone.png";
import Test from "./test";

const AboutBack = styled.div`
  background-image: url(${Footerimg});
  background-attachment: fixed;
  background-size: cover;
  background-position: center;


`;
const About = styled.div`
  background-color: #fff8eb;
  display: grid;
  grid-template-columns: 1fr 1fr;

`;

const AboutText = styled.div`
  margin: 2em;
  padding: 2em;

`;

const AboutKont = styled.div`
  border: 6px solid #7ba80a;
  border-radius: 20px;
  margin: 2em;
  padding: 2em;

`;

const AboutMap = styled.div`

  margin: 2em;
  padding: 2em;

`;
const Backgroundwhite = styled.footer`
  background: white;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Footer = styled.footer`
  display: grid;
  grid-gap: 1px;
  background: gray;
  grid-template-columns: 1fr 1fr 1fr;
  margin-bottom: 2em;

`;


const IndexPage = () => (
    <>
        <div className='headerBack'>
            <img src={Headerimg} alt="картинка фона"/>
        </div>
        <div className='homePage'>

            <div className='works'>
                <div className='work'>
                    <div>
                        <img src={Icon1} alt="Логотип"/>
                    </div>
                    Разработка и согласование проектной документации
                </div>
                <div className='work'>
                    <div>
                        <img src={Icon1} alt="Логотип"/>
                    </div>
                    Экологическая отчетность
                </div>
                <div className='work'>
                    <div>
                        <img src={Icon1} alt="Логотип"/>
                    </div>
                    Лабораторные исследования
                </div>
                <div className='work'>
                    <div>
                        <img src={Icon1} alt="Логотип"/>
                    </div>

                    Учебный центр
                </div>

            </div>
            <Test />

            <AboutBack className="about">
                <About>

                    <AboutText>
                        <h3>О компании</h3>
                        <h4><b>Коллектив ООО "Экопрофи" рад приветствовать Вас на нашем сайте.</b></h4>
                        <p><strong>Мы осуществляем экологическое сопровождение бизнеса
                            и <span>проводим</span> обучение <u>специалистов</u><span>&nbsp;</span>по<span>&nbsp;</span><u>программам&nbsp;&nbsp;&laquo;Экологическая
                                безопасность&raquo;.</u></strong></p>
                        <p><strong> Наши преимущества: </strong></p>
                        <ul>
                            <li><strong>быстрая и&nbsp;квалифицированная помощь&nbsp;в решении вопросов, консультации по
                                вопросам экологии и экологического законодательства</strong></li>
                            <li><strong> </strong><strong>многолетний опыт работы в сфере экологии</strong></li>
                            <li>
                                <span><span><b>наличие квалифицированных и дипломированных специалистов</b></span></span>
                            </li>
                        </ul>
                    </AboutText>
                    <AboutKont>

                        <Form/>

                    </AboutKont>

                </About>
                <AboutMap>

                    <YandexMap/>
                </AboutMap>

            </AboutBack>

            <Footer>

                <Backgroundwhite>
                    Copyright © 2023
                    ООО "Экопрофи"
                </Backgroundwhite>
                <Backgroundwhite>

                    <a href="mailto:info@ekoprofi62.ru">info@ekoprofi62.ru</a>


                </Backgroundwhite>

                <Backgroundwhite>
                    <a className='telLink' href="tel:+79605761557">
                        <img className='telIcon' src={Telephone} alt="номер телефона"/>
                        <p> +7(960) 57-615-57</p></a>
                </Backgroundwhite>


            </Footer>
            <hr/>


        </div>
    </>
);

export default IndexPage;