import "./ReserveForm.css";
import Button from "../Button/Button";
import Input from "../Input/Input";
import { Link } from "react-router-dom";


const ReserveForm = ({price,id}) => {

  return (
    <form className="ReserveForm">
      <label>Check for Availability</label>
      <Input type="date" />
      <label>Number of Adult</label>
      <Input type="number"/>
      <label>Number of Children</label>
      <Input type="number"/>
      <div className="BookNowContainer">
      <h5>Price: </h5>
      <p>₱ {price}</p>
      <Link to={`/tours/reserve/${id}`}>
        <Button variant="primary">Book now!</Button>
      </Link>
      </div>
    </form>
  );
};

export default ReserveForm;