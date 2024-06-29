import { useRef } from "react";
import { VideoProps } from "./type";

const Video: React.FC<VideoProps> = ({ src, width, height }) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  return (
    <div>
      <video width={width || 640} height={height || 360} ref={videoRef}>
        <source src={src} type="video/mp4" />
      </video>
    </div>
  );
};

export default Video;
