export const PlayPauseMusic = () => {
  const Play = () => {
    //If Music is Playing click to Pause Function
    let sounds = document.getElementsByTagName("audio");
    for (let i = 0; i < sounds.length; i++) sounds[i].pause();
  };
  //Music is Paused Click to Play
  const Pause = () => {
    let audio = document.getElementsByClassName("currentSong");
    audio.onended = function () {
      alert("The audio has ended");
    };
    for (let i = 0; i < audio.length; i++) audio[i].play();
  };
  return { Play, Pause };
};
