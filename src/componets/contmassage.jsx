import {
    Text,
    TouchableOpacity,
    Linking
} from 'react-native';

import Viber from '../img/viber.png'
import Whatsapp from '../img/whatsapp.png'
import styled from "styled-components";

const ImgStyle = styled.img`
   width: 50px;
`;
const ContLogoStyle = styled.div`
   display: flex;
   justify-content: center;
   gap: 2em;
`;




const  ShareExample = ()=> {
    return(
        <>
            <h3>
                Мы на связи прямо сейчас!

            </h3>
            <ContLogoStyle>
                <TouchableOpacity onPress={() => Linking.openURL('https://wa.me/+79206330608')}>
                    <Text> <ImgStyle  src={Viber} alt="вайбер"/> </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => Linking.openURL('viber://chat?number=+79209992252')}>
                    <Text> <ImgStyle src={Whatsapp} alt="ватсап"/> </Text>
                </TouchableOpacity>
            </ContLogoStyle>
        </>


    );

};
export default ShareExample;
