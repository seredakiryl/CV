import React from "react";
import s from "./Main.module.scss";
import styleContainer from "../common/styles/Container.module.css";

function Main() {
	return (
		<div className={s.main}>
			<div className={`${styleContainer.container} ${s.mainContainer}`}>
				<div className={s.welcome}>
					<span>Hi There</span>
					<h1> I am Sereda Kiryl</h1>
					<p>Frontend Developer</p>
				</div>
				<div className={s.photo}></div>
			</div>
		</div>
	);
}

export default Main;
