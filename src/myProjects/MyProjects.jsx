import s from "./MyProjects.module.css";
import styleContainer from "../common/styles/Container.module.css";
import Project from "./project/Project";

function Myprojects() {
  return (
    <div className={s.myProjects}>
      <div className={`${styleContainer.container} ${s.skillsContainer}`}>
        <h2 className={s.title}>My Projects</h2>
        <div className={s.projects}>
          <Project
            nameProject={" Social network"}
            description={
              "A social network is a website that allows people with similar interests to come together and share information, photos and videos."
            }
          />
          <Project
            nameProject={"TodoList"}
            description={
              "Don’t think you’re unusual because there are thousands of people who struggle with the same every day, not just in the workplace but in their personal life too."
            }
          />
        </div>
      </div>
    </div>
  );
}

export default Myprojects;
