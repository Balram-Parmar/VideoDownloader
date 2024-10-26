import "./header.css";
function Header() {
  return (
    <header className="header">
      <div className="logo">
        <a className="anchor" href="#">
          <img className="image" src="/logo.png" alt="logo" />
        </a>
      </div>

      <ul className="listOfPages">
        <li>
          <a href="#">
            <img src="/insta.png" alt="Instagram" className="icon" /> Instagram
          </a>
        </li>

        <li>
          <a href="#">
            <img src="youtube.png" alt="YouTube" className="icon" />{" "}
            YouTube
          </a>
        </li>

        <li>
          <a href="#">
            <img src="tik-tok.png" alt="TikTok" className="icon" /> TikTok
          </a>
        </li>
      </ul>
    </header>
  );
}

export default Header;
