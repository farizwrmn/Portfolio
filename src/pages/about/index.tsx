import "/Users/nsmfw/Desktop/typescript/Portfolio/src/App.css";
interface AboutInterface {
  name: string;
}

function About(props: AboutInterface) {
  return (
    <div className="about">
      <h1>About {props.name},</h1>
    </div>
  );
}

export default About;
