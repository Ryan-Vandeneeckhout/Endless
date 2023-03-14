import { SongListMap } from "./SongListMap.js";
import AudioSource from "./AudioSource.js";

export const MusicMenu = (props) => {
  return (
    <>
      {SongListMap.map((item) => {
        return (
          <>
            {/*Return Audio Item JSX*/}
            <AudioSource
              classesNames={item.MusicMenuButton}
              song={item.songName}
              color={item.hex_value}
              MusicPlayingTracker={props.MusicPlayingTracker}
              MusicPlayingTrackerButton={props.MusicPlayingTrackerButton}
              src={item.SongListLocation}
            />
          </>
        );
      })}
    </>
  );
};
