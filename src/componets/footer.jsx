import Telephone from "../img/telephone.png";
import styled from "styled-components";

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
  @media screen and  (max-width: 640px) {
    display: flex;
    flex-direction: column-reverse;
    background: white;
    gap: 1em;

  };

`;

const Footers = () => (
    <>
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
    </>
);

export default Footers;