import Nav from "../nav/Nav";
import s from "./Header.module.css";
import styleContainer from "../common/styles/Container.module.css";

function Header() {
  return (
    <div className={s.header}>
      <div className={` ${styleContainer.container} ${s.headerContainer}`}>
        <Nav className={s.nav} />
      </div>
    </div>
  );
}

export default Header;
