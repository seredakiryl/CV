import s from "./MyProjects.module.scss";
import styleContainer from "../common/styles/Container.module.css";
import Project from "./project/Project";
import Title from "../common/components/title/Title";
import SocialNetwork from "../assets/images/socialNetwork.jpg";
import Todolist from "../assets/images/todolist.jpg";

function Myprojects() {
  const Social = {
    backgroundImage: `url(${SocialNetwork})`,
  };
  const Todolistt = {
    backgroundImage: `url(${Todolist})`,
  };

  return (
    <div className={s.myProjects}>
      <div className={`${styleContainer.container} ${s.skillsContainer}`}>
        <Title text={"My projects"} />
        <div className={s.projects}>
          <Project
            nameProject={" Social network"}
            style={Social}
            url={"https://github.com/seredakiryl"}
            description={
              "A social network is a website that allows people with similar interests to come together and share information, photos and videos."
            }
          />
          <Project
            nameProject={"TodoList"}
            url={"https://github.com/seredakiryl"}
            style={Todolistt}
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
