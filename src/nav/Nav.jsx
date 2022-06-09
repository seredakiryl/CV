import s from "./Nav.module.css";

function Nav() {
  return (
    <div className={s.navs}>
      <a className={s.nav} href="" hred="">
        Home
      </a>
      <a className={s.nav} href="" hred="">
        Skills
      </a>
      <a className={s.nav} href="" hred="">
        Projects
      </a>
      <a className={s.nav} href="" hred="">
        Contacts
      </a>
    </div>
  );
}

export default Nav;
