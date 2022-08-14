import s from "./Skills.module.scss";
import styleContainer from "../common/styles/Container.module.css";
import Skill from "./skill/Skill";
import Title from "../common/components/title/Title";
import {
	GitSkill,
	HtmlSkill,
	JavaScriptSkill,
	JestSkill,
	ReactSkill,
	ReduxSkill,
	SassSkill,
	StoryBookSkill,
	TypeScriptSkill,
} from "./skill/StyleSkills";

function Skills() {
	return (
		<div className={s.skillsBlock}>
			<div className={`${styleContainer.container} ${s.skillsContainer}`}>
				<Title text={"Skills"} />
				<div className={s.skills}>
					<Skill title={"React"} style={ReactSkill} description={" is one of the most important web development languages used today."} />
					<Skill title={"Redux"} style={ReduxSkill} description={"JavaScript is one of the most important web development languages used today."} />
					<Skill title={"TypeScript"} style={TypeScriptSkill} description={"Css is one of the most important web development languages used today."} />
					<Skill title={"JavaScript"} style={JavaScriptSkill} description={"Css is one of the most important web development languages used today."} />
					<Skill title={"StoryBook"} style={StoryBookSkill} description={"Css is one of the most important web development languages used today."} />
					<Skill title={"Jest"} style={JestSkill} description={"Css is one of the most important web development languages used today."} />
					<Skill title={"Git"} style={GitSkill} description={"Css is one of the most important web development languages used today."} />
					<Skill title={"Sass"} style={SassSkill} description={"Css is one of the most important web development languages used today."} />
					<Skill title={"Html"} style={HtmlSkill} description={"Css is one of the most important web development languages used today."} />
				</div>
			</div>
		</div>
	);
}

export default Skills;
