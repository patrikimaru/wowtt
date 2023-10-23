import "./TopDestinationsCard.css";
import Button from "../Button/Button";
import { useNavigate } from "react-router-dom";


const TopDestinationsCard = (props) => {
  const navigate = useNavigate();

  return (
    <article className="TopDestinationsCard">
      <img
        className="TopDestinationsCardBackground"
        src={props.imageUrl}
        alt="card"
        width="1920"
        height="2193"
      />
      <div className="TopDestinationsCardContent | flow">
        <div className="TopDestinationsCardContentContainer | flow">
          <h2 className="TopDestinationsCardTitle">{props.title}</h2>
          <p className="TopDestinationsCardDescription">
            {props.description}
          </p>
        </div>
        <Button 
          className="TopDestinationsCardButton" 
          onClick={() => navigate(`search/result/?query=${props.title}`)}>
            View more
      </Button>
      </div>
    </article>
  );
};

export default TopDestinationsCard;