import s from "./ContactWitchMe.module.css";
import styleContainer from "../common/styles/Container.module.css";

function ContactWitchMe() {
  return (
    <div className={s.contactsWitchMe}>
      <div className={`${styleContainer.container} ${s.contactsWitchMeContainer}`}>
        <h2 className={s.title}>Contact witch me</h2>
        <form className={s.contactsWitchMeForm}>
          <input className={s.contactsInput} />
          <input className={s.contactsInput} />
          <textarea className={s.contactsTexarea} />
        </form>
        <button className={s.btnSubmit}>Submit</button>
      </div>
    </div>
  );
}

export default ContactWitchMe;
