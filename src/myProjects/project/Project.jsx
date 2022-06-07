import s from "./Project.module.css";

function Project(props) {
  return (
    <div className={s.project}>
      <div className={s.containerForImg}>
        <div className={s.imgProect}></div>
        <button className={s.projectBtn} alt="Show">
          Show
        </button>
      </div>
      <h3 className={s.nameProject}>{props.nameProject}</h3>
      <span className={s.description}>{props.description}</span>
    </div>
  );
}

export default Project;
