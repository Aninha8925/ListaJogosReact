import React from "react";

const YouTubeButton = ({ videoId }) => {
  return (
    <a
      href={`https://www.youtube.com/watch?v=${videoId}`}
      target="_blank"
      rel="noopener noreferrer"
    >
      <button>Gameplay</button>
    </a>
  );
};

export default YouTubeButton;
