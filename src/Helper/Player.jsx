import React, { useState, useEffect } from "react";

const useAudio = (url) => {
  const [audio] = useState(new Audio(url));
  const [playing, setPlaying] = useState(false);

  const toggle = () => setPlaying(!playing);

  useEffect(() => {
    audio.play();
  }, [playing]);

  //   useEffect(() => {
  //     audio.addEventListener("ended", () => setPlaying(false));
  //     return () => {
  //       audio.removeEventListener("ended", () => setPlaying(false));
  //     };
  //   }, []);

  return [playing, toggle];
};

const Player = ({ url, children, className }) => {
  const [playing, toggle] = useAudio(url);
  console.log(playing);
  return (
    <a className={className} onClick={toggle}>
      {children}
    </a>
  );
};

export default Player;
