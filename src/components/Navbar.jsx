import "../styles/Navbar.css";
import wikiImage from "../assets/wiki_button.png";
import forumImage from "../assets/forum_button.png";
import bugsImage from "../assets/bugs_button.png";
function Navbar() {
  return (
    <nav className="nav-container">
      <ul>
        <li>
          <a href="#">
            <img id="btn1" src={wikiImage} alt="Wiki photo" />
          </a>
        </li>
        &nbsp;
        <li>
          <a href="#">
            <img id="btn2" src={forumImage} alt="Wiki photo" />
          </a>
        </li>
        &nbsp;
        <li>
          <a href="#">
            <img id="btn3" src={bugsImage} alt="Wiki photo" />
          </a>
        </li>
      </ul>
    </nav>
  );
}
export default Navbar;
