import s from "./Project.module.scss";

function Project(props) {
	return (
		<div className={s.project}>
			<div style={props.style} className={s.image}>
				<a className={s.projectBtn} alt="Show" rel="noreferrer" target="_blank" href={props.url}>
					Show
				</a>
			</div>
			<div className={s.projectInfo}>
				<h3 className={s.nameProject}>{props.nameProject}</h3>
				<span className={s.description}>{props.description}</span>
			</div>
		</div>
	);
}

export default Project;
