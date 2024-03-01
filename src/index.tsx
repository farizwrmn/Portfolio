import Projects from "./pages/home/projects";

function Home() {
  return (
    <>
      <div className="Home">
        <h1>
          Hello,
          <br /> I am Muhamad <span>Fariz</span> Warman,
        </h1>
        <br />
        <h4>
          Currently learning Fullstack Web Development in{" "}
          <a href="https://purwadhika.com">
            <span className="fw-bolder">Purwadhika.</span>
          </a>
        </h4>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="160"
          height="156"
          fill="currentColor"
          className="bi bi-arrow-down"
          viewBox="0 0 35 2"
        >
          <path
            fill-rule="evenodd"
            d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1"
          />
        </svg>
        <br />
      </div>
      <div>
        <Projects />
      </div>
    </>
  );
}

export default Home;
