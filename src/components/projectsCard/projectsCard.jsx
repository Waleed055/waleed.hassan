import "./projectsCard.css";
import play from "../../assets/images/playstroe.svg";
import apple from "../../assets/images/apple.svg";
import web from "../../assets/images/web.svg";

export default function ProjectsCard({ title, image, androidLink, iosLink, webLink }) {
  return (
    <div className="new-project-card">
      <div className="npc-img">
        <img src={image} alt="project" />
      </div>

      <h3 className="npc-title">{title}</h3>
      <h6>1M+ Downloads</h6>

      <div className="npc-icons">

        {/* Android Button (Only if link exists) */}
        {androidLink && androidLink !== "#" && (
          <div className="icons-svg">
            <a href={androidLink} target="_blank" rel="noopener noreferrer">
              <img src={play} alt="android" />
            </a>
          </div>
        )}

        {/* iOS Button (Only if link exists) */}
        {iosLink && iosLink !== "#" && (
          <div className="icons-svg">
            <a href={iosLink} target="_blank" rel="noopener noreferrer">
              <img src={apple} alt="ios" />
            </a>
          </div>
        )}

        {/* Web Button (Only if link exists) */}
        {webLink && webLink !== "#" && (
          <div className="icons-svg">
            <a href={webLink} target="_blank" rel="noopener noreferrer">
              <img src={web} alt="web" />
            </a>
          </div>
        )}

      </div>
    </div>
  );
}
