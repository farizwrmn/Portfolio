interface AboutInterface {
  name: string;
}

function About(props: AboutInterface) {
  return (
    <div>
      <h1>About {props.name}</h1>
    </div>
  );
}

export default About;
