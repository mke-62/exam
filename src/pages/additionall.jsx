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
        <h4><b>Проектная организация ООО «Экопрофи» предлагает Вам дополнительные виды работ:</b></h4>


        <OlStyle>

            <LiStyle>Проведение количественного химического анализа компонентного состава отходов и/или биотестирования отходов с привлечением аккредитованной организации.</LiStyle>
            <LiStyle>Проведение лабораторных исследований выбросов вредных (загрязняющих) веществ в атмосферу (на стационарных источниках выбросов; на границе санитарно-защитных зон; иное) с привлечением аккредитованной лаборатории.</LiStyle>
            <LiStyle>Проведение санитарно-эпидемиологической экспертизы проектной документации с получением санитарно-эпидемиологического&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; заключения&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; с&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; привлечением аккредитованного органа инспекции.</LiStyle>
            <LiStyle>Получение справки о фоновых концентрациях загрязняющих веществ в аккредитованной организации (Рязанский ЦГМС &ndash; филиал ФГБУ &laquo;Центральное УГМС&raquo;).</LiStyle>



        </OlStyle>
        <br/>

        </MainStyle>
    </MarginStyle>

);

export default Page;