import s from "./Project.module.css";

function Project(props) {
  return (
    <div className={s.project}>
      <div className={s.containerForImg}>
        <a className={s.projectBtn} alt="Show">
          Show
        </a>
      </div>
      <div className={s.nameAndDescriptionContainer}>
        <h3 className={s.nameProject}>{props.nameProject}</h3>
        <span className={s.description}>{props.description}</span>
      </div>
    </div>
  );
}

export default Project;
