import styled from 'styled-components';
import Form from '../componets/formic';
import {AnimationOnScroll} from 'react-animation-on-scroll';
import { FadeIn} from "react-slide-fade-in";



import Icon1 from '../img/icon1.png'
import Icon2 from '../img/icon2.png'
import Icon3 from '../img/icon3.png'
import Icon4 from '../img/icon4.png'
import Headerimg from '../img/background.jpg'
import Footerimg from '../img/background2.jpg'

import ContMassage from '../componets/contmassage'

import YandexMap from '../componets/yandexmap'
import {NavLink} from "react-router-dom";
import React from "react";

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
  @media screen and  (max-width: 640px){
    position: static;
    max-width: 650px;
  };


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

                <FadeIn
                    from="bottom"
                    positionOffset={400}
                    triggerOffset={400}
                    delayInMilliseconds={200}
                >

                    <NavLink as={NavLink} to={"/development"}>
                    <Work>
                        <WorkDiv>
                            <WorkImg src={Icon1} alt="Логотип"/>
                        </WorkDiv>
                        Разработка и согласование проектной документации
                    </Work>

                    </NavLink>
                </FadeIn>

                <FadeIn
                    from="bottom"
                    positionOffset={400}
                    triggerOffset={400}
                    delayInMilliseconds={200}
                >
                    <NavLink as={NavLink} to={"/reporting"}>

                    <Work>
                        <WorkDiv>
                            <WorkImg src={Icon2} alt="Логотип"/>
                        </WorkDiv>
                        Экологическая отчетность
                    </Work>
                    </NavLink>
                </FadeIn>

                <FadeIn
                    from="bottom"
                    positionOffset={400}
                    triggerOffset={400}
                    delayInMilliseconds={200}
                >
                    <NavLink as={NavLink} to={"/additionall"}>
                    <Work>
                        <WorkDiv>
                            <WorkImg src={Icon3} alt="Логотип"/>
                        </WorkDiv>
                        Дополнительные услуги
                    </Work>
                    </NavLink>
                </FadeIn>
                <FadeIn
                    from="bottom"
                    positionOffset={400}
                    triggerOffset={400}
                    delayInMilliseconds={200}
                >
                    <NavLink as={NavLink} to={"/training"}>
                    <Work>
                        <WorkDiv>
                            <WorkImg src={Icon4} alt="Логотип"/>
                        </WorkDiv>

                        Учебный центр
                    </Work>
                    </NavLink>
                </FadeIn>


            </Works>


            <AboutBack>

                <About>

                    <AboutText>
                        <AnimationOnScroll  offset={100} animateIn='animate__zoomIn'>
                              <h3>О компании</h3>
                            <h4><b>Коллектив ООО "Экопрофи" рад приветствовать Вас на нашем сайте.</b></h4>
                            <p> <b>Мы осуществляем экологическое сопровождение бизнеса
                                и  проводим  обучение <u>специалистов</u>   по   <u>программам Экологическая
                                    безопасность&raquo;.</u> </b></p>
                            <p>  <b>Наши преимущества:</b>  </p>
                            <ul>
                                <li> <b>быстрая и&nbsp;квалифицированная помощь&nbsp;в решении вопросов,
                                    консультации по
                                    вопросам экологии и экологического законодательства</b> </li>
                                <li> <b>многолетний опыт работы в сфере экологии </b></li>
                                <li>
                                    <b>наличие квалифицированных и дипломированных специалистов</b>
                                </li>
                            </ul>
                        </AnimationOnScroll>
                    </AboutText>


                    <AboutKont>
                        <AnimationOnScroll offset={100} animateIn='animate__zoomIn'>


                            <Form/>
                            <ContMassage/>
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




        </div>
    </>
);

export default IndexPage;