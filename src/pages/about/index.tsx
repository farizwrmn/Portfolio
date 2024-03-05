import "../../App.css";
import Profile from "../../assets/img/profile1.jpg";

function About() {
  return (
    <>
      <br />
      <br />
      <br />

      <div className="container">
        <div className="row">
          <div className="col-12">
            <h1 className="display-3">
              Hi I'm Fariz,
              <small className="text-muted">
                {" "}
                <br />a <em>Fullstack Web Developer</em>
                <span>.</span>
              </small>
            </h1>
          </div>
          <div className="col-lg-5">
            <br />
            <img
              src={Profile}
              alt="Profile Picture"
              width="480"
              className="profile"
            />
          </div>
          <div className="col-lg-7 text-justify">
            <p className="lead">
              " I'm an observer who spends my time finding out ways about how to
              improve things in my surroundings. By emphasizing the value of
              teamwork, I could get better understanding to then solve and
              organizing things to get the reliable objective of the company
              that I worked on. "
            </p>
            <div className="col-sm-12 text-center">
              <span>_________________________________</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
