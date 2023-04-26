import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { PlayPauseMusic } from "./PlayPauseMusicFunction";

export const MusicIcon = (props) => {
  const { Play, Pause } = PlayPauseMusic();
  const [buttonHoverState, setButtonHoverState] = useState(false);
  const [TextButton, setText] = useState("Music Settings");

  const handleMusicPlayingTrackerButton = (action) => {
    action();
    props.MusicPlayingTracker();
    setText(action === Play ? "Play Music" : "Pause Music");
  };

  return (
    <div
      className={`buttonSideIconContainer ${
        buttonHoverState ? "showText" : "hideText"
      }`}
      onMouseLeave={() => setButtonHoverState(false)}
    >
      <p className={buttonHoverState ? "showTextButton" : "hideTextButton"}>
        {TextButton}
      </p>

      {props.MusicPlaying ? (
        <div
          className="icon"
          onClick={() => handleMusicPlayingTrackerButton(Play)}
          onMouseEnter={() => setButtonHoverState(true)}
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
          onClick={() => handleMusicPlayingTrackerButton(Pause)}
          onMouseEnter={() => setButtonHoverState(true)}
        >
          <FontAwesomeIcon
            color="goldenrod"
            className="globalPlayButton"
            icon="fa-pause"
          />
        </div>
      )}
    </div>
  );
};
