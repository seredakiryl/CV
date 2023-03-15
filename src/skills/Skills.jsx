import s from "./Skills.module.scss";
import styleContainer from "../common/styles/Container.module.css";
import Skill from "./skill/Skill";
import Title from "../common/components/title/Title";
import {
  SiReact,
  SiRedux,
  SiJavascript,
  SiTypescript,
  SiGit,
  SiJest,
  SiSass,
  SiStorybook,
  SiHtml5,
} from "react-icons/si";

function Skills() {
  return (
    <div className={s.skillsBlock}>
      <div className={`${styleContainer.container} ${s.skillsContainer}`}>
        <Title text={"Skills"} />
        <div className={s.skills}>
          <Skill title={"React"} Icon={SiReact} />
          <Skill title={"Redux"} Icon={SiRedux} />
          <Skill title={"TypeScript"} Icon={SiTypescript} />
          <Skill title={"JavaScript"} Icon={SiJavascript} />
          <Skill title={"StoryBook"} Icon={SiStorybook} />
          <Skill title={"Jest"} Icon={SiJest} />
          <Skill title={"Git"} Icon={SiGit} />
          <Skill title={"Sass"} Icon={SiSass} />
        </div>
      </div>
    </div>
  );
}

export default Skills;
