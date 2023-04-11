
import '../App.css';


import styled from "styled-components";

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
  margin: 2em;
  `
;


const Page = () => (
    <MarginStyle>
        <MainStyle>
        <h1> Реквизиты и контакты</h1>

        <table>
            <tbody>
            <tr>
                <td><span>Наименование предприятия (полное)</span></td>
                <td>Общество с ограниченной ответственностью "Экопрофи"</td>
            </tr>
            <tr>
                <td>Наименование предприятия (сокращенное)</td>
                <td>ООО "Экопрофи"</td>
            </tr>
            <tr>
                <td>Юридический адрес</td>
                <td>390000, г. Рязань, Первомайский проспект, <br /> д. 7, пом. Н9, оф. 15</td>
            </tr>
            <tr>
                <td>Почтовый адрес</td>
                <td>390000, Первомайский проспект, <br />д. 7, пом. Н9, оф. 15 - для ООО «Экопрофи» <br />(с указанием трек-номера
                    для отслеживания)
                </td>
            </tr>
            <tr>
                <td><span>ОКВЭД</span></td>
                <td>71.12.53</td>
            </tr>
            <tr>
                <td><span>ИНН</span></td>
                <td>6234193239</td>
            </tr>
            <tr>
                <td><span>КПП</span></td>
                <td>623401001</td>
            </tr>
            <tr>
                <td><span>ОГРН</span></td>
                <td>1206200012260</td>
            </tr>
            <tr>
                <td><span>ОКАТО</span></td>
                <td>61401380000</td>
            </tr>
            <tr>
                <td><span>ОКТМО</span></td>
                <td>61701000001</td>
            </tr>
            <tr>
                <td><span>ОКПО</span></td>
                <td>46510924</td>
            </tr>
            <tr>
                <td><span>ОКПОФ</span></td>
                <td>12300</td>
            </tr>
            <tr>
                <td><span>ОКФС</span></td>
                <td>16</td>
            </tr>
            <tr>
                <td>Расчетный счет №</td>
                <td>40702810458000002703</td>
            </tr>
            <tr>
                <td>Наименование банка</td>
                <td>Рязанский РФ АО "Россельхозбанк"</td>
            </tr>
            <tr>
                <td>Корреспондентский счет№</td>
                <td>30101810900000000793</td>
            </tr>
            <tr>
                <td><span>БИК</span></td>
                <td>046126793</td>
            </tr>
            <tr>
                <td><span>Директор</span></td>
                <td>Директор Касицина Елена Юрьевна</td>
            </tr>
            <tr>
                <td>Тел</td>
                <td>8 (4912) 22-78-81</td>
            </tr>
            <tr>
                <td>Тел. сот.</td>
                <td>8-960-57-615-57 (Viber, WhatsApp, Telegram)</td>
            </tr>
            <tr>
                <td>Электронная почта</td>
                <td>info@ekoprofi62.ru</td>
            </tr>
            </tbody>
        </table>

        </MainStyle>
    </MarginStyle>
);

export default Page;