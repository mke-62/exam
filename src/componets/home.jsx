import styled from 'styled-components';
import Form from './formic';
import {AnimationOnScroll} from 'react-animation-on-scroll';


import Icon1 from '../img/icon1.png'
import Headerimg from '../img/background.jpg'
import Footerimg from '../img/background2.jpg'

import YandexMap from './yandexmap'
import Telephone from "../img/telephone.png";

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
  @media screen and  (max-width: 960px){
    grid-template-columns:  1fr;
  };

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

const Address = styled.footer`
  display: flex;
  flex-direction: column;

  background: white;
  padding: 1em;
  max-width: 250px;
  position: absolute;
  top: 40px; 
  left: 40px;
  opacity: 0.8;
  border-radius: 20px;


`;
const Works = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  justify-items: center;

  @media screen and  (max-width: 960px){
    grid-template-columns: 1fr 1fr;
  };
  @media screen and  (max-width: 640px){
    grid-template-columns: 1fr;
  };
  
`;

const Work = styled.div`
  width: min-content;
  text-align: center;
  margin: 1em;
  display: flex;
  flex-direction: column;
  align-items: center;
    
`;

const WorkDiv = styled.div`
  display: flex;
  justify-content: center;
  border: 0.4em solid #84be19;
  border-radius: 50%;
  box-shadow: 0px 0px 0px 0.4em rgba(222,222,222,0.75) inset;
  margin: 1em;
  max-width: 250px;
`;

const WorkImg = styled.img`
  max-width: 150px;
  min-width: 80px;
  padding: 2em;
  @media screen and  (max-width: 1170px) {
    max-width: 120px;
  };
    @media screen and  (max-width: 1050px) {
      max-width: 100px;
    };
      @media screen and  (max-width: 960px) {
        max-width: 150px;
      };
`;

const IndexPage = () => (
    <>
        <div className='headerBack'>
            <img src={Headerimg} alt="картинка фона"/>
        </div>
        <div className='homePage'>

            <Works>
                <AnimationOnScroll animateIn='animate__fadeInUp'>
                    <Work>
                        <WorkDiv>
                            <WorkImg src={Icon1} alt="Логотип"/>
                        </WorkDiv>
                        Разработка и согласование проектной документации
                    </Work>
                </AnimationOnScroll>
                <AnimationOnScroll animateIn='animate__fadeInUp'>
                    <Work>
                        <WorkDiv>
                            <WorkImg src={Icon1} alt="Логотип"/>
                        </WorkDiv>
                        Экологическая отчетность
                    </Work>
                </AnimationOnScroll>
                <AnimationOnScroll animateIn='animate__fadeInUp'>
                    <Work>
                        <WorkDiv>
                            <WorkImg src={Icon1} alt="Логотип"/>
                        </WorkDiv>
                        Лабораторные исследования
                    </Work>
                </AnimationOnScroll>
                <AnimationOnScroll animateIn='animate__fadeInUp'>
                    <Work>
                        <WorkDiv>
                            <WorkImg src={Icon1} alt="Логотип"/>
                        </WorkDiv>

                        Учебный центр
                    </Work>
                </AnimationOnScroll>

            </Works>


            <AboutBack>

                <About>

                    <AboutText>
                        <AnimationOnScroll animateIn='animate__zoomIn'>


                            <h3>О компании</h3>
                            <h4><b>Коллектив ООО "Экопрофи" рад приветствовать Вас на нашем сайте.</b></h4>
                            <p><strong>Мы осуществляем экологическое сопровождение бизнеса
                                и <span>проводим</span> обучение <u>специалистов</u><span>&nbsp;</span>по<span>&nbsp;</span><u>программам&nbsp;&nbsp;&laquo;Экологическая
                                    безопасность&raquo;.</u></strong></p>
                            <p><strong> Наши преимущества: </strong></p>
                            <ul>
                                <li><strong>быстрая и&nbsp;квалифицированная помощь&nbsp;в решении вопросов,
                                    консультации по
                                    вопросам экологии и экологического законодательства</strong></li>
                                <li><strong> </strong><strong>многолетний опыт работы в сфере экологии</strong></li>
                                <li>
                                    <span><span><b>наличие квалифицированных и дипломированных специалистов</b></span></span>
                                </li>
                            </ul>
                        </AnimationOnScroll>
                    </AboutText>


                    <AboutKont>
                        <AnimationOnScroll animateIn='animate__zoomIn'>


                            <Form/>
                        </AnimationOnScroll>
                    </AboutKont>


                </About>

                <AboutMap>
                    <AnimationOnScroll animateIn='animate__fadeInLeftBig'>
                        <Address>
                            <p>Наш адрес:</p>
                            <p> Рязань, Первомайский проспект, д. 7, оф. 15</p>

                        </Address>
                    </AnimationOnScroll>

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