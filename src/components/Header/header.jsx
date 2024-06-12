import "./header.scss";
import Dropdown from "../Dropdown/dropdown";

const Header = () => {
  const cityOptions = ["Kyiv", "Lviv", "Odesa", "Dnipro", "Kharkiv"];
  const languageOptions = ["Ukrainian", "English"];
  return (
    <div className="header">
      <div className="header-top">
        <div className="container">
          <div className="header-top__left">
            <ul>
              <li>Головна</li>
              <li>Відгуки</li>
              <li>Контакти</li>
              <li>Про нас</li>
              <li>Доставка</li>
              <li>Акції</li>
              <li>Робота</li>
            </ul>
          </div>
          <div className="header-top__right">
            <div className="city-dropdawn">
              <Dropdown options={cityOptions} defaultText="Select a city" />
            </div>
            <div className="log in">Вхід регістрація</div>
            <div className="social">посилання на соціухи</div>
            <div className="language-dropdawn">
              <Dropdown
                options={languageOptions}
                defaultText="Select a language"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="header-middle">
        <div className="container">
          <div className="header-middle-left">
            <div className="worktime">
              <p>
                Працюємо для вас <br></br>
                Пн-Нд 9:00-21:00
              </p>
            </div>
            <div className="phone">
              <p>+380 62 222 22 22</p>
            </div>
          </div>
          {/* <div className="logo">logo</div> */}
          <div className="header-middle-right">
            <div className="buy-card">
              <div className="btn_wrapper">
                <button className="">
                  <span className="name-btn">
                    Korzina
                    <span className="count">0</span>
                    <span className="valute">грн</span>
                  </span>
                  <span className="icon">иконка</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="header-bottom">
        <div className="container">
          <div className="menu">
            <ul>
              <li>Десерти</li>
              <li>Вареники</li>
              <li>Пельмені</li>
              <li>від шефа</li>
              <li>напої</li>
              <li>соуси</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
