import { PlayPauseMusic } from "./PlayPauseMusicFunction";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
export const MusicIcon = (props) => {
  //Music Global Button Component
  const { Play, Pause } = PlayPauseMusic();
  const [buttonHoverState, setButtonHoverState] = useState(false);
  const [TextButton, setText] = useState("Music Settings");

  const MusicPlayingTrackerButton = () => {
    Play();
    props.MusicPlayingTracker();
    setText("Play Music");
  };

  const MusicPlayingTrackerButton1 = () => {
    Pause();
    props.MusicPlayingTracker();
    setText("Pause Music");
  };
  return (
    <div
      className={`buttonSideIconContainer ${
        buttonHoverState ? "showText" : "hideText"
      }`}
      onMouseLeave={() => {
        setButtonHoverState(false);
      }}
    >
      <p className={buttonHoverState ? "showTextButton" : "hideTextButton"}>
        {TextButton}
      </p>

      {props.MusicPlaying ? (
        <div
          className="icon"
          onClick={MusicPlayingTrackerButton}
          onMouseEnter={() => {
            setButtonHoverState(true);
          }}
        >
          <FontAwesomeIcon
            color="green"
            className="globalPlayButton"
            icon="fa-play"
          />
        </div>
      ) : (
        <div
          className="icon"
          onMouseEnter={() => {
            setButtonHoverState(true);
          }}
          onClick={MusicPlayingTrackerButton1}
        >
          <FontAwesomeIcon
            color="red"
            className="globalPlayButton"
            icon="fa-pause"
          />
        </div>
      )}
    </div>
  );
};
