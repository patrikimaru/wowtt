import "./HomeBanner.css";
import SearchBar from "../../../../../components/shared/SearchBar/SearchBar";

const HomeBanner = () => {
  return (
    <section className="HomeBanner">
      <div className="HomeBannerContent">
        <h3>Embark on unforgettable <br/> journeys with ease</h3>
        <p>book your next adventure with us.</p>
        <SearchBar/>
      </div>
    </section>
  );
};

export default HomeBanner;