import headercss from "./style/Header.css";
import coroa from "./img/coroa.png";

function Header() {
  return (
    <div className="header">
      <img src={coroa} alt="Coroa" />
      <h1>Jogos que venceram nos Games Awards</h1>
      <img src={coroa} alt="Coroa" />
    </div>
  );
}

export default Header;
