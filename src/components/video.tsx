import { useRef, useState } from "react";
import { VideoProps } from "./type";

const Video: React.FC<VideoProps> = ({ src, width, height }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayPause = () => {
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play();
        setIsPlaying(true);
      } else {
        videoRef.current.pause();
        setIsPlaying(false);
      }
    }
  };

  return (
    <div
      className="relative"
      style={{ width: width || 640, height: height || 360 }}
    >
      <video
        width={width || 640}
        height={height || 360}
        ref={videoRef}
        className="relative"
      >
        <source src={src} type="video/mp4" />
      </video>
      <div className="absolute w-full left-0 top-0 h-full flex items-center justify-center">
        <button onClick={handlePlayPause}>
          {isPlaying ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M9 4h-2a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h2a2 2 0 0 0 2 -2v-12a2 2 0 0 0 -2 -2z" />
              <path d="M17 4h-2a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h2a2 2 0 0 0 2 -2v-12a2 2 0 0 0 -2 -2z" />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M6 4v16a1 1 0 0 0 1.524 .852l13 -8a1 1 0 0 0 0 -1.704l-13 -8a1 1 0 0 0 -1.524 .852z" />
            </svg>
          )}
        </button>
      </div>
    </div>
  );
};

export default Video;
