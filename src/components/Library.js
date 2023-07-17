import React from "react";
import LibrarySong from "./LibrarySong";

const Library = ({
  songs,
  setCurrentSong,
  audioRef,
  isPlaying,
  setSongs,
  libraryStatus,
}) => {
  return (
    <div className={`library ${libraryStatus ? "active-library" : ""} `}>
      <span className="font-face">
        <h2>Playlists</h2>
      </span>
      <div className="library-songs">
        {songs.map((song) => (
          <LibrarySong
            songs={songs}
            setSongs={setSongs}
            setCurrentSong={setCurrentSong}
            song={song}
            key={song.id}
            audioRef={audioRef}
            isPlaying={isPlaying}
          />
        ))}
      </div>
        <h4 className="footer">
          © KOBE PHO 2023
        </h4>
    </div>
  );
};

export default Library;
