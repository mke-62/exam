import styled from 'styled-components';
const YandexMapStyle = styled.div`
  @media screen and  (max-width: 640px){
    display: none;

  };
`;

const IndexPage = () => (
    <YandexMapStyle>
        <iframe
            src="https://yandex.ru/map-widget/v1/?um=constructor%3A94758cc276d69cc34a0efdbbdbcea25f15d1507142837d9a8aa84d95ad0edc7b&amp;source=constructor"
            width="100%" height="400" frameBorder="0"/>
    </YandexMapStyle>

);


export default IndexPage