import { useParams, Link } from "react-router-dom";
import useFetch from "../../../hooks/useFetch";
import Button from "../../../components/shared/Button/Button";

const ReservePage = () => {
  const { id } = useParams()
  const {data, loading } = useFetch(`http://localhost:5000/tour/getOne/${id}`)


  return (
    <div className="PageContainer">
      {loading ? 
        (
          "Loading"
        ) : (
          <main>
            <img src={data.photoUrl} alt="background"/>
            <div>
              <h4>{data.title}</h4>
              <div>
                <p>₱ {data.price}</p>
                <Link to={`/tours/reserve/${data._id}`}>
                  <Button variant="primary">Book now!</Button>
                </Link>
              </div>
            </div>
          </main>
        )
      }

    </div>
  );
};

export default ReservePage;