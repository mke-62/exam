import styled from "styled-components";

const LiStyle = styled.li`
  padding: 0.5em;
  text-align: left;
`;
const OlStyle = styled.ol`
  display: flex;
  flex-direction: column;
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
            <h4><b>Проектная организация ООО «Экопрофи» предлагает Вам cоставление и сопровождение при согласовании
                различных видов экологической отчетности в Приокском межрегиональном управлении Росприроднадзора и/или
                Министерстве природопользования Рязанской области (полное годовое экологическое обслуживание
                организации):</b></h4>


            <OlStyle>

                <LiStyle>Заполнение форм &laquo;Порядка учета в области обращения с отходами&raquo; по Приказу
                    Минприроды №1028 от 08.12.2020 года.</LiStyle>

                <LiStyle>Составление &laquo;Отчета 2-тп отходы&raquo;, &laquo;Отчета 2-тп воздух.</LiStyle>

                <LiStyle>Составление &laquo;Отчета 4-ос&raquo;.</LiStyle>

                <LiStyle>Составление &laquo;Декларации о плате за негативное воздействие на окружающую
                    среду&raquo;.</LiStyle>

                <LiStyle>Представление сведений в Региональный кадастр отходов.</LiStyle>

                <LiStyle>Составление &laquo;Отчета по Программе производственного экологического контроля
                    (ПЭК)&raquo;.</LiStyle>

                <LiStyle>Составление отчетности по экологическому сбору (3 вида отчетов).</LiStyle>

                <LiStyle>Составление Технических отчетов о неизменности технологических процессов.</LiStyle>


            </OlStyle>
            <br/>

        </MainStyle>
    </MarginStyle>
);

export default Page;