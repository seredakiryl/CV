import s from "./Skill.module.scss";

function Skill({ Icon, title }) {
  return (
    <div className={s.skill}>
      <div className={s.skill__content}>
        <Icon className={s.icon} />
        <h3 className={s.title}> {title}</h3>
      </div>
    </div>
  );
}

export default Skill;
