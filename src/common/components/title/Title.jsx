import s from "./Title.module.scss";

function Title(props) {
	return (
		<div className={s.title}>
			<h3>{props.text}</h3>
		</div>
	);
}

export default Title;
