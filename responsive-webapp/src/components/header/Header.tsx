import "./Header.css";

const Header = () => (
  <header className="App-header">
    <a href="#">
      <img src="/cat-logo.png" alt="Cat logo" className="App-logo" />
    </a>
    <h2 style={{ flex: 2 }}>Cats</h2>
  </header>
);

export default Header;
