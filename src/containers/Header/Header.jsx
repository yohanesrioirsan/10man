import "./Header.css";
import MainButton from "../../components/Button/MainButton/MainButton";

function Header() {
  return (
    <div className="header-hero">
      <div className="header-hero-content">
        <div className="header-text">
          <h1>
            Generate 10 Man
            <br />
            For Custom Fun Match
          </h1>
        </div>
        <div className="header-sub-text">
          <p>
            Gather 10 (or more.) people or your best friends and generate your
            team randomly here. Then, have fun together with the team determined
            by our website!
          </p>
        </div>
        <a href="#generate">
          <MainButton value="Try Now" />
        </a>
      </div>
    </div>
  );
}

export default Header;
