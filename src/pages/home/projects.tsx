import Projects1 from "../../assets/img/Todo-list.png";

function Projects() {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-sm-6 text-justify">
            <h3>To Do List App</h3>
            <br />
            This project is a work in progress as I learning the document
            manipulation troughout the course. The usage is simple, you can add
            your new task that you want and after the task is done you can
            simply click the checkbox or delete from your list. After that you
            can add your new task again and so on.
            <br />
            <br />
            <br />
            <em>This was made using Vite: React + Typescript</em>
            <br />
          </div>
          <div className="col-lg-6 text-center">
            <br />
            <a href="http://frzwarman-todolistapp.vercel.app">
              <img
                src={Projects1}
                alt="Project 1"
                width="500"
                className="link-project"
              />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Projects;
