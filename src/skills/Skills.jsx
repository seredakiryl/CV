import s from "./Skills.module.css";
import styleContainer from "../common/styles/Container.module.css";
import Skill from "./skill/Skill";

function Skills() {
  return (
    <div className={s.skillsBlock}>
      <div className={`${styleContainer.container} ${s.skillsContainer}`}>
        <h2 className={s.title}>Skills</h2>
        <div className={s.skills}>
          <Skill title={"Js"} description={"JavaScript is one of the most important web development languages used today."} />
          <Skill title={"Css"} description={"Css is one of the most important web development languages used today."} />
          <Skill title={"React"} description={" is one of the most important web development languages used today."} />
        </div>
      </div>
    </div>
  );
}

export default Skills;
