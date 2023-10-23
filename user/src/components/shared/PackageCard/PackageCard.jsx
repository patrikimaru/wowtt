import { Link } from "react-router-dom";
import "./PackageCard.css";
import {IoStarOutline} from "react-icons/io5";

const PackageCard = (props) => {
  return (
    <Link to={`/package/${props.id}`} className='PackageCard'>
      <img src={props.imageUrl} alt={props.title} className='PackageCardImage'/>
      <h4 className='PackageCardTitle'>{props.title}</h4>
      <div className="PackageCardDescription">
        <p>{props.city}</p>
        |
        <span className="PackageCardRating"><IoStarOutline/> {props.rating > 0 ? props.rating: "No"} ratings</span>
      </div>
      <p>From <span className="PackageCardPrice">₱ {props.price}</span> </p>
    </Link>
  );
};

export default PackageCard;