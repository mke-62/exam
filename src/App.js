import './App.css';
import Home from './componets/home';
import Logo from './img/logo.png'

const menu = [
    'ГЛАВНАЯ','О КОМПАНИИ','УСЛУГИ','КОНТАКТЫ'
];


function App() {
  return (
      <div className='main'>
          <div className='menu'>
              <ul>
                  {menu.map((book)=>(
                      <li><ins>{book}</ins></li>
                  ))}
              </ul>

          </div>
        <header>
            <div className='headerLine'>
                <a href="tel:+79605761557">+7(960) 57-615-57</a>
                <div className='logo'>
                    <h5>Экологическое сопровождение вашего бизнеса

                    </h5>
                    <img src={Logo} alt="Логотип"/>

                </div>
                <p>Адрес: г. Рязань, Первомайский проспект, д. 7, оф. 15</p>

            </div>



        </header>


        <Home />
      </div>

  );
}

export default App;
