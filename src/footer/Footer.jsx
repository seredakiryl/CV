import s from "./Footer.module.css";
import styleContainer from "../common/styles/Container.module.css";

function Footer() {
  return (
    <footer className={s.footer}>
      <h2>Sereda Kiryl</h2>
      <div className={`${styleContainer.container} ${s.footerContainer}`}>
        <img className={s.footerImgItem} />
        <img className={s.footerImgItem} />
        <img className={s.footerImgItem} />
        <img className={s.footerImgItem} />
      </div>
      <h2>Все права защищены</h2>
    </footer>
  );
}

export default Footer;
