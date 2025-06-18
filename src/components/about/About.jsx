import "./about.css";
import Award from "../../img/award.png";

const About = () => {
  return (
    <div className="a">
      <div className="a-left">
        <div className="a-card bg"></div>
        <div className="a-card">
          <img
            src="https://play-lh.googleusercontent.com/jOOCxt0YRNlAEmJ4In1roEjEyjisdGakTGTzPzxdjB8KtpIU4VIUVxVNshcjqRUGejQ"
            alt=""
            className="a-img"
          />
        </div>
      </div>
      <div className="a-right">
        <h1 className="a-title">About Me</h1>
        <p className="a-sub">
          Research Engineer with 3+ years of experience at the intersection of machine learning, large language models, and infrastructure.
          Skilled at translating research insights into scalable systems, designing evaluations to improve model performance, and identifying new capabilities aligned with real-world agentic behavior.
          Passionate about first-principles thinking, rapid experimentation, and building intelligent systems with real product impact.

        </p>
        <p className="a-desc">
            I realized that theoretical knowledge will never be sufficient and began working on projects to enhance my expertise. 
        </p>
        <div className="a-award">
          <img src={Award} alt="" className="a-award-img" />
          <div className="a-award-texts">
            <h3 className="a-award-title">Smart India Hackathon 2020</h3>
            <p className="a-award-desc">
              <b>Winner for SIH'2020.</b><br></br>
              <b>Language detection project: </b> Developed a Machine learning model that identifies languages in the speech input audio file.

            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
