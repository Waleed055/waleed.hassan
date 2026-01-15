import ProfilePic from '../../assets/images/Waleed-profile.svg';
import "./profilePic.css";

function Profile() {
  return (
    <div className="profile-container">
      <img src={ProfilePic} alt="Profile" className="profile-pic" />
    </div>
  );
}

export default Profile;
