// App.jsx
import "./App.css";
import Header from "./components/Header.jsx";
import Jogos from "./components/Jogos.jsx";
import sekiro from "./components/img/sekiro.jpg";
import res4 from "./components/img/re4.png";
import uncharted from "./components/img/uncharted.jpg";
import scroll from "./components/img/tes.jpg";
import zelda from "./components/img/lzbw.png";
import last from "./components/img/tlou.jpg";


function App() {
  return (
    <div className="App">
      <Header />
      <div className="jogos">
        <div className="linha1">
          <Jogos
            img={sekiro}
            nome="Sekiro Shadows Die Twice"
            ano="2019"
            resumo="Sekiro: Shadows Die Twice acompanha um shinobi em busca de vingança no Japão feudal, enfrentando desafios e inimigos sobrenaturais com habilidades especiais."
            genero="Ação, Aventura, RPG"
            videoUrl="https://youtu.be/VIDEO_ID_SEKIRO"
          />
          <Jogos
            img={res4}
            nome="Resident Evil 4"
            ano="2005"
            resumo="É um jogo de ação e sobrevivência em que o agente Leon S. Kennedy deve resgatar a filha do presidente dos EUA de um culto na Espanha, enfrentando inimigos e criaturas mutantes."
            genero="Ação, sobrevivência, terror"
            videoUrl="https://youtu.be/LVsMDaATPQQ?si=PNMmyvU8S0EkysEV"
          />
          <Jogos
            img={uncharted}
            nome="Uncharted 2: Among Thieves"
            ano="2009"
            resumo="Em Uncharted 2: Among Thieves, Nathan Drake busca uma antiga relíquia em uma jornada global repleta de ação, quebra-cabeças e traições. Ele enfrenta inimigos e desventura enquanto explora ruínas e paisagens exóticas para encontrar o lendário 'El Dorado'."
            genero="Ação, Aventura"
            videoUrl="https://youtu.be/LXaOguzFHTE?si=-c04Mu9JVEgqWYDh"
          />
        </div>

        <div className="linha2">
          <Jogos
            img={scroll}
            nome="The Elder Scrolls V: Skyrim"
            ano="2011"
            resumo="The Elder Scrolls V: Skyrim é um RPG em mundo aberto onde o jogador explora a vasta terra de Skyrim como o Dragonborn, um herói com o poder de enfrentar dragões e moldar o destino do reino."
            genero="RPG de Ação"
            videoUrl="https://youtu.be/gWj5-WZDyoI?si=S5fnHyhmN0VSikOE"
          />
          <Jogos
            img={zelda}
            nome="The Legend of Zelda: Breath of the Wild"
            ano="2017"
            resumo="The Legend of Zelda: Breath of the Wild é um RPG em mundo aberto onde Link explora o vasto reino de Hyrule, resolve quebra-cabeças e enfrenta inimigos para derrotar Ganon e salvar a princesa Zelda."
            genero="Ação e Aventura"
            videoUrl="https://youtu.be/g2a5PmIhryA?si=O1vmTubflzenUPT4"
          />
          <Jogos
            img={last}
            nome="The Last of Us Part II"
            ano="2020"
            resumo="The Last of Us Part II segue Ellie em uma jornada violenta e emocional em um mundo pós-apocalíptico, buscando vingança enquanto enfrenta dilemas morais e a brutalidade de uma sociedade desmoronada."
            genero="Ação, Aventura, sobrevivência"
            videoUrl="https://youtu.be/z2XS_RryJGk?si=PcqB1yA0qNESxCTw"
          />
        </div>
      </div>
    </div>
  );
}

export default App;
