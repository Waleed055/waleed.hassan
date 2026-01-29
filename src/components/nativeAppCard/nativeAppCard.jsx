import "./nativeAppCard.css";
import androidIcon from "../../assets/images/native.svg"; // <-- apna icon yah import karo

export default function NativeAppCard() {
  return (
    
    <div className="native">
      <div className="outer-line">

      <div className="lt"></div>
  <div className="rt"></div>
  <div className="lb"></div>
  <div className="rb"></div>

      <div className="native-icon">
        <img src={androidIcon} alt="android icon" />
      </div>

      <h4 className="native-heading">Native Apps (Android)</h4>

      <p className="native-description">
      I provide end-to-end Android app development services, covering everything
from concept and design to development and deployment. I build fast,
modern, and scalable apps that align with your business goals while
delivering a clean UI, strong performance, and a seamless user experience.
I ensure every app is optimized, future-ready, and built to grow with your users.


      </p>
     </div>
    </div>
  );
}
