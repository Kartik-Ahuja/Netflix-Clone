import React, { useEffect, useState } from "react";
import YouTube from "react-youtube";

function YouTubeVideos({ trailerUrl, opts, fetchUrl }) {
  return (
    <div className="youtube__container">
      <div className="youtube_screen">
        {trailerUrl?.length > 0 ? (
          <>
            <div />
            <YouTube videoId={trailerUrl?.split("=")[1]} opts={opts} />
          </>
        ) : null}
      </div>
    </div>
  );
}

export default YouTubeVideos;
