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
          <a href="#">test 1</a>
        </li>

        <li>
          <a href="#">test 2</a>
        </li>

        <li>
          <a href="#">test 3</a>
        </li>
      </ul>
    </header>
  );
}

export default Header;
