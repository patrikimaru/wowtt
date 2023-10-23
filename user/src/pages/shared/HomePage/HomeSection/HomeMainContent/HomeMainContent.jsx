import "./HomeMainContent.css";
import Button from "../../../../../components/shared/Button/Button";
import PackageCard from "../../../../../components/shared/PackageCard/PackageCard";
import useFetch from "../../../../../hooks/useFetch";
import { useState } from "react";

const HomeMainContent = () => {
  const { data, loading }  = useFetch(`http://localhost:5000/tour/getAll`);
  const [itemToShow, setItemToShow] = useState(10);

  const calculateAverageRating = (reviews) => {
    if (reviews.length === 0) {
      return 0; 
    }

    const totalRating = reviews.reduce((sum, review) => sum + review.rating, 0);
    return totalRating / reviews.length;
  };
  
  const handleViewMoreClick = () => {
    setItemToShow(itemToShow + 10)
  }

  return (
    <section className="HomeMainContentSection">
      <h4 className="HomeMainContentSectionTitle">Experience the thrill of adventure with our popular activities.</h4>
      <main>
        {loading ? 
          (
            "Loading"
          ) : 
          (
            data.length === 0 ? 
            (
              "You should run the backend first to see this content"
            ) :
            (
              data.slice(0, itemToShow).map((tour) => (
                <PackageCard
                  key={tour._id}
                  id={tour._id}
                  imageUrl={tour.photoUrl}
                  city={tour.city}
                  rating={calculateAverageRating(tour.reviews)}
                  title={tour.title}
                  price={tour.price}
                />
              )
            )
        ))}
      </main>
      {
        data.length <= itemToShow ?
        null
        :
        (
          <div className="ButtonContainer">
          <Button 
            variant="outline-primary" 
            size="full"
            onClick={handleViewMoreClick}
            >View More</Button>
          </div>
        )
      }
    </section>
  );
};

export default HomeMainContent;