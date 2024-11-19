import AboutImage from "../../assets/about.jpg";
import data from "./data";
import Card from "../../components/Card";
import "./about.css";

const About = () => {
  return (
    <section id="about">
      <div className="container about__container">
        <div className="about__left">
          <div className="about__portrait">
            <img src={AboutImage} alt="About " />
          </div>
        </div>
        <div className="about__right">
          <h2>About Me</h2>
          <div className="about__cards">
            {data.map((item) => (
              <Card key={item.id} className="about__card">
                <span className="about__card-icon">{item.icon}</span>
                <h5>{item.title}</h5>
                <small>{item.desc}</small>
              </Card>
            ))}
          </div>
          <p>
            I am a qualified and experienced Virtual Assistant, Data Entry
            Specialist, and Translator. I am a full-time freelancer with over
            five years of experience managing administrative tasks, ensuring
            accurate data entry, and delivering high-quality translations.
          </p>
          <p>
            With a keen eye for detail and excellent organizational skills, I
            handle diverse projects efficiently and effectively. I’ve supported
            businesses by streamlining operations, maintaining flawless records,
            and providing translations that meet the highest standards of
            accuracy and cultural relevance.
          </p>
          <p>
            You can rely on me for expert virtual assistance, accurate data
            entry, reliable translations, efficient email management, and
            seamless administrative support.
          </p>
          <p>
            I respond quickly to client inquiries and guarantee complete
            satisfaction with every project I undertake.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
