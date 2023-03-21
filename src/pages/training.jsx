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


const Page = () => (
    <>
        <h1>Уважаемые коллеги и партнеры!</h1>
        <h4><b>Учебный центр ООО &laquo;Экопрофи&raquo; предлагает обучение по программам &laquo;Экологическая безопасность </b></h4>



<OlStyle>
    <LiStyle><strong> </strong>Подготовка и контрольная проверка знаний по программе:«Повышение квалификации в области сбора, транспортирования,обработки,утилизации, обезвреживания, размещения отходов I - IV классов опасности» <strong>(программа 38 часов)</strong></LiStyle>

</OlStyle>
        <br/>

        <h1> Сведения об образовательной деятельности</h1>
        <p><a href="osnovnye-svedeniya.html">Основные сведения</a></p>
        <p><a href="napravleniya-obucheniya-i-ceny.html">Направления обучения и цены</a></p>
        <p><a href="zayavka-na-obuchenie.html">Заявка на обучение</a></p>
        <p><a href="obrazovatelnye-programmy.html">Образовательные программы</a></p>

        <p><a href="struktura-i-organy-upravleniya-obrazovatel'noj-organizaciej.html">Структура и органы управления образовательной организацией</a></p>
        <p><a href="dokumenty.html">Документы</a></p>
        <p><a href="obrazovanie.html">Образование</a></p>
        <p><a href="obrazovatel'nye-standarty.html">Образовательные стандарты</a></p>
        <p><a href="rukovodstvo-pedagogicheskij-sostav.html">Руководство Педагогический (научно-педагогический) состав</a></p>
        <p><a href="download/mto.pdf">Материально-техническое обеспечение и оснащенность образовательного процесса</a></p>
        <p><a href="stipendii-i-inye-vidy-material'noj-podderzhki.html">Стипендии и иные виды материальной поддержки</a></p>
        <p><a href="platnye-obrazovatel'nye-uslugi.html">Платные образовательные услуги</a></p>
        <p><a href="vakantnye-mesta.html">Вакантные места для приема (перевода);на обучение</a></p>
        <p><a href="finansovo-khozyaystvennaya-deyatel'nost'.html">Финансово-хозяйственная деятельность</a></p>
        <p><a href="dostupnaya-sreda.html">Доступная среда</a></p>
        <p><a href="mezhdunarodnoye-sotrudnichestvo.html">Международное сотрудничество</a></p>
        <p><a href="rekvizity-i-kontakty.html">Реквизиты и контакты</a></p>
        <p>&nbsp;</p>

    </>
);

export default Page;