// import { useRef } from "react";

// export const useKioskAudio = () => {
//   const audio = useRef(new Audio());
//   const playAudio = (song) => {
//     stopAudio();
//     audio.current.setAttribute("src", `${song}`);
//     audio.current.play();
//   };
//   const stopAudio = () => {
//     audio.current.pause();
//     audio.current.currentTime = 0;
//   };
//   return {
//     playAudio,
//     stopAudio,
//   };
// };
