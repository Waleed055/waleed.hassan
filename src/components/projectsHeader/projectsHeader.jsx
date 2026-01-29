import "./projectsHeader.css"
import SVGS from "../../assets/images/lines.svg"

export default function ProjectHeader() {
  return (
    
    <div className="project-header ">
      
      <img src={SVGS} alt="line" className="project-icon left-icon" />

      <h2 className="project-heading">Projects</h2>

      <img src={SVGS} alt="line" className="project-icon right-icon" />
    </div>
  );
}
