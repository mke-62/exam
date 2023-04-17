import styled from "styled-components";

const LiStyle = styled.li`
  padding: 0.5em;
  text-align: left;
`;
const OlStyle = styled.ol`
  display: flex;
  flex-direction: column;
  list-style-type: none;
`;
const MarginStyle = styled.div`
  margin-right: 2em;
  margin-left: 2em;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const MainStyle = styled.main`

  max-width: 1200px;

`;


const Page = () => (
    <MarginStyle>
        <MainStyle>
            <h1>Уважаемые коллеги и партнеры!</h1>
            <h4><b>Учебный центр ООО &laquo;Экопрофи&raquo; предлагает обучение по программам &laquo;Экологическая
                безопасность </b></h4>


            <OlStyle>
                <LiStyle><strong> </strong>Подготовка и контрольная проверка знаний по программе:«Повышение квалификации
                    в области сбора, транспортирования,обработки,утилизации, обезвреживания, размещения отходов I - IV
                    классов опасности» <strong>(программа 38 часов)</strong></LiStyle>

            </OlStyle>
            <br/>

            <h1> Сведения об образовательной деятельности</h1>
            <p><a href="osnovnye-svedeniya">Основные сведения</a></p>
            <p><a href="napravleniya-obucheniya-i-ceny">Направления обучения и цены</a></p>
            <p><a href="zayavka-na-obuchenie.html">Заявка на обучение</a></p>
            <p><a href="obrazovatelnye-programmy.html">Образовательные программы</a></p>

            <p><a href="struktura-i-organy-upravleniya-obrazovatel'noj-organizaciejml">Структура и органы управления
                образовательной организацией</a></p>
            <p><a href="dokumenty">Документы</a></p>
            <p><a href="obrazovanie">Образование</a></p>
            <p><a href="obrazovatel'nye-standarty">Образовательные стандарты</a></p>
            <p><a href="rukovodstvo-pedagogicheskij-sostav">Руководство Педагогический (научно-педагогический)
                состав</a></p>
            <p><a href="download/mto.pdf">Материально-техническое обеспечение и оснащенность образовательного
                процесса</a></p>
            <p><a href="stipendii-i-inye-vidy-material'noj-podderzhki">Стипендии и иные виды материальной
                поддержки</a></p>
            <p><a href="platnye-obrazovatel'nye-uslugi">Платные образовательные услуги</a></p>
            <p><a href="vakantnye-mesta">Вакантные места для приема (перевода);на обучение</a></p>
            <p><a href="finansovo-khozyaystvennaya-deyatel'nost'">Финансово-хозяйственная деятельность</a></p>
            <p><a href="dostupnaya-sreda">Доступная среда</a></p>
            <p><a href="mezhdunarodnoye-sotrudnichestvo">Международное сотрудничество</a></p>
            <p><a href="rekvizity-i-kontakty">Реквизиты и контакты</a></p>
            <p>&nbsp;</p>

        </MainStyle>
    </MarginStyle>
);

export default Page;