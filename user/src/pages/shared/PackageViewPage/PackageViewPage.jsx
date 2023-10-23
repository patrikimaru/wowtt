import "./PackageViewPage.css";
import useFetch from '../../../hooks/useFetch';
import { useParams } from 'react-router-dom';
import {IoStarOutline} from "react-icons/io5";
import Avatar from "../../../components/shared/Avatar/Avatar";
import DefaultPic from "../../../assets/images/profilePic.jpg"
import ReservationForm from "../../../components/user/ReservationForm/ReservationForm";

const PackageViewPage = () => {
  const { id } = useParams()
  const {data, loading } = useFetch(`http://localhost:5000/tour/getOne/${id}`)
  

  return (
    <div className="PageContainer ToursViewPage">
      {loading ? 
        (
          "Loading"
        ) : 
        (
          <main>
            <img src={data.photoUrl} className="PackageImage" alt="background"/>
            <div className='PackageDetails'>
              <div className="PackageDetailsHeader">
                <div>
                  <h1>{data.title}</h1>
                  <article  className="PackageHighlight">
                    {data.highlight && data.highlight.length > 0 ? (
                        data.highlight.map((highlight, index) => (
                          <ul key={index}>
                            <li>
                            <h4>{highlight.highlightTitle}</h4>
                            <p>{highlight.highlightDetails}</p>
                            </li>
                          </ul>
                        ))
                      ) : (
                        <p>No highlights available</p>
                      )}
                  </article>
                  <ReservationForm 
                    tourId={id}
                    packageName={data.title} 
                    price={data.price}
                    maxGroupSize={data.maxGroupSize}
                    location={data.city}/>
              </div>
             
              </div>
              <div className="PackageIncluded">
                <div>
                <h4>What's included</h4>
                {data.included && data.included.length > 0 ? (
                    data.included.map((include, index) => (
                      <ul key={index}>
                        <li>
                        <p>{include}</p>
                        </li>
                      </ul>
                    ))
                  ) : (
                    <p>No inclusion available</p>
                  )}
                </div>
                  <br/>
                  <div>
                    <h4>What's not included</h4>
                    {data.excluded && data.excluded.length > 0 ? (
                        data.excluded.map((exclude, index) => (
                          <ul key={index}>
                            <li>
                            <p>{exclude}</p>
                            </li>
                          </ul>
                        ))
                      ) : (
                        <p>No exclusion available</p>
                      )}
                  </div>
                </div>
              <br/>
              <h4>Most Recent Reviews</h4> 
              {data.reviews && data.reviews.length > 0 ? (
                  data.reviews.map((review) => (
                    <div className="review" key={review._id}>
                      <Avatar src={DefaultPic} width={50} height={50} />
                      <div>
                      <div className="review-header">
                        <h4>{review.username}</h4>
                        <p className="review-rating">{review.rating} <IoStarOutline /></p>
                      </div>
                        <p>{review.reviewText}</p>
                      </div>
                    </div>
                  ))
                ) : (
                  <p>No reviews available</p>
                )}
             
  
            
            </div>
          </main>
        )
      }
    </div>
  );
};

export default PackageViewPage;