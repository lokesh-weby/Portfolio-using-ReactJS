import Gallery from "./project.json";

const projects = () => {

  return (
    <>
      <div id="projects">
        <h1 className="text-white">Project Gallery</h1>
        <h2 className="text-danger">{"Swipe>>"}</h2>

        <div className="scroller container shadow-lg">
          {Gallery.map((project, index) => (
            <div className="img" key={index}>
            <img src={project.img}/>
            <div className="content">
              <h3>{project.Tittle}</h3>

              <ul>
                <li>
                  {" "}
                  <p>
                    {project.highlights.desc}{" "}
                    <i className="tech">{project.highlights.skills}</i>
                  </p>
                </li>
                <li>
                  <p>{project.highlights.Learned}</p>
                </li>
              </ul>

              <div className="button">
                <a
                  className="btn btn-primary"
                  href={project.github}
                  target="_blank"
                >
                  <i class="bi bi-code-slash"></i>Source Code
                </a>
                <a
                  className="btn btn-danger"
                  href={project.demo}
                  target="_blank"
                >
                  <i class="bi bi-link-45deg"></i>Go Live
                </a>
              </div>
            </div>
          </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default projects;
