import {
  MapPinIcon,
  PhoneIcon,
  EnvelopeIcon,
  CalendarDaysIcon,
} from "@heroicons/react/20/solid";
import "./Profile.css";
import { useDarkMode } from "../../utils/DarkModeContext";
import ProfileImage from "../../images/profile.jpg";

function Profile() {
  const { isDarkMode } = useDarkMode();

  return (
    <div
      className={`profile-container ${
        isDarkMode ? "dark-container" : "light-container"
      }`}
    >
      <div className="profile-image-container">
        <img src={ProfileImage} alt="Profile" className="profile-image" />
      </div>
      <h1>Samsheer Alam</h1>
      <div className={`desgination-container `}>
        <h4 className={`desgination ${isDarkMode ? "dark-color" : "light-color"}`}>
          Full-Stack Developer
        </h4>
      </div>

      <div className={`profile-details ${isDarkMode ? "dark-bg" : "light-bg"}`}>
        {/* Phone */}
        <div className="profile-detail divider ">
          <div className="icon-container">
            <PhoneIcon className="icon" style={{color: isDarkMode ? "#22c05a" :"#cf5f1e"}}/>
          </div>
          <div className="text-container">
            <p className="label">Phone</p>
            <p
              className={`label-value ${
                isDarkMode ? "dark-text" : "light-text"
              }`}
            >
              +91 9940264655
            </p>
          </div>
        </div>

        {/* Email */}
        <div className="profile-detail divider">
          <div className="icon-container">
            <EnvelopeIcon className="icon" style={{color: isDarkMode ? "#22c05a" :"#cf5f1e"}}/>
          </div>
          <div className="text-container">
            <p className="label">Email</p>
            <p
              className={`label-value ${
                isDarkMode ? "dark-text" : "light-text"
              }`}
            >
              samsheer.developer@gmail.com
            </p>
          </div>
        </div>

        {/* Location */}
        <div className="profile-detail divider">
          <div className="icon-container">
            <MapPinIcon className="icon" style={{color: isDarkMode ? "#22c05a" :"#cf5f1e"}}  />
          </div>
          <div className="text-container">
            <p className="label">Location</p>
            <p
              className={`label-value ${
                isDarkMode ? "dark-text" : "light-text"
              }`}
            >
              Bangalore, India
            </p>
          </div>
        </div>

        {/* Birthday and Age */}
        <div className="profile-detail">
          <div className="icon-container">
            <CalendarDaysIcon className="icon" style={{color: isDarkMode ? "#22c05a" :"#cf5f1e"}} />
          </div>
          <div className="birthdate">
            <div>
              <p className="label">Birthday</p>
              <p
                className={`label-value ${
                  isDarkMode ? "dark-text" : "light-text"
                }`}
              >
                Febraury 16, 1995
              </p>
            </div>
            <div className="age-container">
              <p className="label">Age</p>
              <p
                className={`label-value ${
                  isDarkMode ? "dark-text" : "light-text"
                }`}
              >
                {new Date().getFullYear() - 1995}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
