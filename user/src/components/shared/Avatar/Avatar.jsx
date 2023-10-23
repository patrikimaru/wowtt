import "./Avatar.css";
import DefaultProfilePic from "../../../assets/images/profilePic.jpg";


const Avatar = (props) => {
  return (
    <img
      src={props.src ? props.src : DefaultProfilePic}
      alt={props.alt}
      width={props.width}
      height={props.height}
      className={`profile`}
    />
  );
};

export default Avatar;