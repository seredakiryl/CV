import s from "./Footer.module.css";
import styleContainer from "../common/styles/Container.module.css";

function Footer() {
  return (
    <footer className={s.footer}>
      <h2 className={s.title}>Sereda Kiryl</h2>
      <div className={`${styleContainer.container} ${s.footerContainer}`}>
        <img className={s.footerImgItem} />
        <img className={s.footerImgItem} />
        <img className={s.footerImgItem} />
        <img className={s.footerImgItem} />
      </div>
      <h5 className={s.title}>Все права защищены</h5>
    </footer>
  );
}

export default Footer;
