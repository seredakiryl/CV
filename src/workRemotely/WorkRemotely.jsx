import s from "./WorkRemotely.module.css";
import styleContainer from "../common/styles/Container.module.css";

function WorkRemotely() {
  return (
    <div className={s.workRemotely}>
      <div className={`${styleContainer.container} ${s.workRemotelyContainer}`}>
        <h2 className={s.title}>I can work remotely</h2>
        <button className={s.btnHire}>HIRE ME</button>
      </div>
    </div>
  );
}

export default WorkRemotely;
