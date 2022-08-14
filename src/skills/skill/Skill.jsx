import s from "./Skill.module.scss";

function Skill(props) {
	return (
		<div className={s.skill}>
			<div style={props.style} className={s.icon}></div>
			<h3 className={s.title}> {props.title}</h3>
			<span className={s.description}>{props.description}</span>
		</div>
	);
}

export default Skill;
