import { PlayPauseMusic } from "./PlayPauseMusicFunction";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export const MusicIcon = (props) => {
  //Music Global Button Component
  const { Play } = PlayPauseMusic();
  const { Pause } = PlayPauseMusic();

  const MusicPlayingTrackerButton = () => {
    Play();
    props.MusicPlayingTracker();
  };

  const MusicPlayingTrackerButton1 = () => {
    Pause();
    props.MusicPlayingTracker();
  };
  return (
    <div className="pausePlayButton">
      {props.MusicPlaying ? (
        <FontAwesomeIcon
          onClick={MusicPlayingTrackerButton}
          className="globalPlayButton green"
          icon="fa-play"
        />
      ) : (
        <FontAwesomeIcon
          onClick={MusicPlayingTrackerButton1}
          className="globalPlayButton red"
          icon="fa-pause"
        />
      )}
    </div>
  );
};
