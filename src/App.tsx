import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BannerComponent } from "./components/BannerComponent";
import { FooterComponent } from "./components/FooterComponent";
import { NavBarComponent } from "./components/NavBarComponent";
import { ProjectsComponent } from "./components/ProjectsComponent";
import { SkillsComponent } from "./components/SkillsComponent";

function App() {
  return (
    <div className="App">
      <NavBarComponent />
      <BannerComponent />
      <SkillsComponent />
      <ProjectsComponent />
      <FooterComponent />
    </div>
  );
}

export default App;
