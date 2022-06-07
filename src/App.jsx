import "./App.css";
import ContactWitchMe from "./contactsWitchMe/ContactWitchMe";
import Footer from "./footer/Footer";
import Header from "./header/Header";
import Main from "./main/Main";
import Myprojects from "./myProjects/MyProjects";
import Skills from "./skills/Skills";
import WorkRemotely from "./workRemotely/WorkRemotely";

function App() {
  return (
    <div>
      <Header />
      <Main />
      <Skills />
      <Myprojects />
      <WorkRemotely />
      <ContactWitchMe />
      <Footer />
    </div>
  );
}

export default App;
