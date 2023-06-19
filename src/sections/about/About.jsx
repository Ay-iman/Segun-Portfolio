import AboutImage from "../../assets/about.png";
import data from "./data";
import Card from "../../components/Card";
import "./about.css";

const About = () => {
  return (
    <section id="about">
      <div className="container about__container">
        <div className="about__left">
          <div className="about__portrait">
            <img src={AboutImage} alt="About Image" />
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
            I'm a qualified and experienced content writer, proofreader, and SEO
            specialist. I am a full-time freelancer with over five years of
            experience editing, proofreading, and writing articles, blogs, and
            website content.
          </p>
          <p>
            I graduated from university with a degree in English Literature and
            Creative Writing. I am an avid writer who can carve out ANYTHING
            with words.
          </p>
          <p>
            I've written SEO-optimized articles that have helped my clients'
            websites rank high on Google. I also perform On-Page SEO with the
            Rankmath and Yoast plugins.
          </p>
          <p>
            You can put your trust in me for SEO-content optimization, web
            content, academic writing, excellent editing, blog articles,
            standard reviews, and report writing.
          </p>
          <p>
            I respond quickly to emails from customers and guarantee complete
            satisfaction with each order.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
