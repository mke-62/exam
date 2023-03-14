import Icon1 from '../img/icon1.png'
import Headerimg from '../img/background.jpg'


const IndexPage = () => (
    <>
        <div className='headerBack'>
            <img src={Headerimg} alt="Логотип"/>

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
                    Экологическая отчетность</div>
                <div className='work'>
                    <div>
                        <img src={Icon1} alt="Логотип"/>
                    </div>
                    Лабораторные исследования</div>
                <div className='work'>
                    <div>
                        <img src={Icon1} alt="Логотип"/>
                    </div>

                    Учебный центр</div>

            </div>
            <div className='about'>
                <div>
                    <h3>О компании</h3>
                    <h4 ><b>Коллектив ООО "Экопрофи" рад приветствовать Вас на нашем сайте.</b></h4>
                    <p><strong>Мы осуществляем экологическое сопровождение бизнеса и <span  >проводим</span> обучение <u>специалистов</u><span>&nbsp;</span>по<span>&nbsp;</span><u>программам&nbsp;&nbsp;&laquo;Экологическая безопасность&raquo;.</u></strong></p>
                    <p><strong> Наши преимущества: </strong></p>
                    <ul>
                        <li><strong>быстрая и&nbsp;квалифицированная помощь&nbsp;в решении вопросов, консультации по вопросам экологии и экологического законодательства</strong></li>
                        <li><strong> </strong><strong>многолетний опыт работы в сфере экологии</strong></li>
                        <li><span><span><b>наличие квалифицированных и дипломированных специалистов</b></span></span></li>
                    </ul>
                </div>
                <div className='aboutKont'>

                </div>

            </div>
        </div>
    </>
);

export default IndexPage;