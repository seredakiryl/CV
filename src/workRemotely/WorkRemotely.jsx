import s from "./WorkRemotely.module.scss";
import styleContainer from "../common/styles/Container.module.css";
import Title from "../common/components/title/Title";

function WorkRemotely() {
	return (
		<div className={s.workRemotely}>
			<div className={`${styleContainer.container} ${s.workRemotelyContainer}`}>
				<Title text={"I can work remotely"} />
				<button className={s.btnHire}>HIRE ME</button>
			</div>
		</div>
	);
}

export default WorkRemotely;
