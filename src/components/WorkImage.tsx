import { useState } from "react";
import { MdArrowOutward } from "react-icons/md";

interface Props {
  image: string;
  alt?: string;
  video?: string;
  link?: string;
}

const WorkImage = (props: Props) => {
  const [isVideo, setIsVideo] = useState(false);
  const [video, setVideo] = useState("");
  const [imgLoaded, setImgLoaded] = useState(false);
  const [imgError, setImgError] = useState(false);
  const handleMouseEnter = async () => {
    if (props.video) {
      setIsVideo(true);
      const response = await fetch(`src/assets/${props.video}`);
      const blob = await response.blob();
      const blobUrl = URL.createObjectURL(blob);
      setVideo(blobUrl);
    }
  };

  const linkTarget = props.link
    ? props.link.startsWith("http")
      ? "_blank"
      : "_self"
    : "_blank";

  return (
    <div className="work-image">
      <a
        className="work-image-in"
        href={props.link}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={() => setIsVideo(false)}
        target={linkTarget}
        rel={linkTarget === "_blank" ? "noopener noreferrer" : undefined}
        data-cursor={"disable"}
      >
        {props.link && (
          <div className="work-link">
            <MdArrowOutward />
          </div>
        )}
        <img
          src={props.image}
          alt={props.alt}
          onLoad={() => setImgLoaded(true)}
          onError={(e) => {
            setImgError(true);
            const target = e.currentTarget as HTMLImageElement;
            // fallback to placeholder if available
            try {
              target.src = "/images/placeholder.webp";
            } catch (err) {
              // ignore
            }
          }}
          style={{ opacity: imgLoaded ? 1 : 0.001, transition: "opacity 240ms ease" }}
        />
        {!imgLoaded && !imgError && <div className="image-skeleton" />}
        {isVideo && <video src={video} autoPlay muted playsInline loop></video>}
      </a>
    </div>
  );
};

export default WorkImage;
