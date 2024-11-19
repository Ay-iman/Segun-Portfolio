import HeaderImage from "../../assets/header.jpg";
import data from "./data";
import "./header.css";

const Header = () => {
  return (
    <header id="header">
      <div className="container header__container">
        <div className="header__profile">
          <img src={HeaderImage} alt="Header Portait" />
        </div>
        <h3>Rabiu Lekan</h3>
        <p>
          I am a skilled and reliable Virtual Assistant, Data Entry Specialist,
          and Translator with years of experience delivering exceptional
          results. As a dedicated full-time freelancer, I excel in managing
          administrative tasks, ensuring accurate and efficient data handling,
          and providing precise translations that bridge language barriers. Let
          me help you stay organized, boost productivity, and achieve your goals
          seamlessly.
        </p>
        <div className="header__cta">
          <a href="#contact" className="btn primary">
            Let's Talk
          </a>
          {/* <a href="#portfolio" className="btn light">
            My Work
          </a> */}
        </div>
        <div className="header__socials">
          {data.map((item) => (
            <a
              key={item.id}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              {item.icon}
            </a>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Header;
