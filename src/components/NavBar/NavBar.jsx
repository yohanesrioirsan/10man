import "./NavBar.css";
import SecondaryButton from "../Button/SecondaryButton/SecondaryButton";

function NavBar() {
  return (
    <nav className="d-flex justify-content-between">
      <div>
        <h1 className="home-logo">10Man</h1>
      </div>
      <div>
        <a
          href="https://github.com/yohanesrioirsan/10man"
          target="_blank"
          rel="noreferrer"
        >
          <SecondaryButton value="GitHub" />
        </a>
      </div>
    </nav>
  );
}

export default NavBar;
