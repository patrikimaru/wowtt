import "./SearchPage.css";
import useFetch from '../../../hooks/useFetch';
import Button from '../../../components/shared/Button/Button';
import PackageCard from '../../../components/shared/PackageCard/PackageCard';
import Place from '../../../components/shared/Search/Place'
import Price from '../../../components/shared/Search/Price'
import Rate from '../../../components/shared/Search/Rate'
import { useLocation } from "react-router-dom";
import { useState } from "react";


const SearchPage = () => {
  const location = useLocation();
  const [itemToShow, setItemToShow] = useState(15);
  const { data, loading }  = useFetch(`http://localhost:5000/tour/getAll`);
  const searchQuery = new URLSearchParams(location.search).get('query');
  const [selectedPlace, setSelectedPlace] = useState('');
  const [selectedPrice, setSelectedPrice] = useState('');
  const [selectedRate, setSelectedRate] = useState('');

  const calculateAverageRating = (reviews) => {
    if (reviews.length === 0) {
      return 0; 
    }

    const totalRating = reviews.reduce((sum, review) => sum + review.rating, 0);
    return totalRating / reviews.length;
  };

  const filteredData = data
  .filter((tour) => {
    const searchCondition =
      !searchQuery ||
      tour.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      tour.city.toLowerCase().includes(searchQuery.toLowerCase()) ||
      tour.address.toLowerCase().includes(searchQuery.toLowerCase());
    return searchCondition;
  })
  .filter((tour) => {
    const placeCondition = !selectedPlace || tour.city === selectedPlace;

    return placeCondition;
  }).sort((a, b) => {
    if (selectedPrice === 'Pricing Low-High') {
      return a.price - b.price;
    } else if (selectedPrice === 'Pricing High-Low') {
      return b.price - a.price;
    } else {
      return 0;
    }
  }).sort((a, b) => {
    if (selectedRate === 'Rating High-Low') {
      return calculateAverageRating(b.reviews) - calculateAverageRating(a.reviews);
    } else if (selectedRate === 'Rating Low-High') {
      return calculateAverageRating(a.reviews) - calculateAverageRating(b.reviews);
    } else {
      return 0;
    }
  });



  
  const handleViewMoreClick = () => {
    setItemToShow(itemToShow + 15)
  }

  return (
    <div className='PageContainer SearchPage'>
      <h4>Search for "{searchQuery}"</h4>
      <div className="dropdown">
        <Place
          selectedOption={selectedPlace}
          setSelectedOption={setSelectedPlace}
        />
        <Price
          selectedOption={selectedPrice}
          setSelectedOption={setSelectedPrice}
        />
        <Rate
          selectedOption={selectedRate}
          setSelectedOption={setSelectedRate}
        />
      </div>
      <main>
      {loading ? 
        (
          "Loading"
        ) : 
        (
          filteredData.length === 0 ? 
          (
            <p>Sorry, we could'nt find anything for "{searchQuery}"</p>
          ) :
          filteredData.slice(0, itemToShow).map((tour) => (
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
        ))}
      </main>
      {
        filteredData.length <= itemToShow ?
        null
        :
        (
          <div className="ButtonContainer">
            <Button onClick={handleViewMoreClick} variant="outline-primary" size="full">
              View More
            </Button>
          </div>
        )
      }
    </div>
  );
};

export default SearchPage;