import logo from "./logo.svg";
import "./App.css";
import { Link } from "./main/components/Link";

function App() {
  return (
    <div className="App">
      <header class="header">
        <a class="logo" href="index.html">
          Minseo's Page
        </a>
        {/* <img class="profileimage" src="image/profile.png" alt="profile"> */}
        <Link />
        <div class="profile">
          <p class="name">Minseo Kim</p>
          <p>Based in London</p>
          <p>Stay at home</p>
          {/* <img src="icon/rainbow.svg" alt=""> */}
        </div>
      </header>
    </div>
  );
}

export default App;
