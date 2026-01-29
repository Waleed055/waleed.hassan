import "./hybridAppCard.css";
import hybridIcon from "../../assets/images/hybird.svg";

export default function HybridAppCard() {
  return (
    <div className="hybrid">
    <div className="outer-line">
       <div className="lt"></div>
  <div className="rt"></div>
  <div className="lb"></div>
  <div className="rb"></div>
    
      <div className="hybrid-icon">
        <img src={hybridIcon} alt="hybrid icon" />
      </div>

      <h4 className="hybrid-heading">Hybrid Apps (Flutter) </h4>

      <p className="hybrid-description">
       I build high-performance hybrid apps using Flutter/React Native,
ensuring smooth UI, fast performance, and consistent experience across
Android and iOS. My focus is on clean architecture, scalable development
practices, and intuitive user experiences. I collaborate effectively with
teams to transform ideas into polished, production-ready applications.

      </p>
    </div>
    </div>
    
  );
}
