import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header class="header">
        <a class="logo" href="index.html">
          Minseo's Page
        </a>

        {/* <img class="profileimage" src="image/profile.png" alt="profile"> */}

        <div class="links">
          <a href="https://www.codewars.com/users/Minseo%20Kim"></a>
          <a href="https://www.freecodecamp.org/gemmak"></a>
          <a href="https://github.com/gemma-Kim"></a>
        </div>

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
