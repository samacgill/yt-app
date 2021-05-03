import React from "react";
import "./VideoItem.css";

export default function VideoItem({ video, onVideoSelect }) {
  return (
    //   arrow function onClick enables callback with video as argument
    <div className="VideoItem item" onClick={() => onVideoSelect(video)}>
      <img
        className="ui image"
        src={video.snippet.thumbnails.medium.url}
        alt={video.snippet.title}
      />
      <div className="content">
        <div className="header">{video.snippet.title}</div>
      </div>
    </div>
  );
}
