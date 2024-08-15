import React from "react";
import "./style/Jogos.css";

function Jogos(props) {
  const { img, nome, ano, resumo, genero, videoUrl } = props;

  return (
    <div className="jogo">
      <img src={img} alt={nome} />
      <h4>Nome: {nome}</h4>
      <h4>Ano premiado: {ano}</h4>
      <h4>Resumo: {resumo}</h4>
      <h4>Gênero: {genero}</h4>
      {videoUrl && (
        <a href={videoUrl} target="_blank" rel="noopener noreferrer">
          <button>Assista ao Vídeo</button>
        </a>
      )}
    </div>
  );
}

export default Jogos;
