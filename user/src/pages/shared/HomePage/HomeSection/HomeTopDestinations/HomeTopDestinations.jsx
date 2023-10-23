import "./HomeTopDestination.css";
import TopDestinationsCard from '../../../../../components/shared/TopDestinationsCard/TopDestinationsCard';
import { TopDestinationData } from "../../../../../data/TopDestinationData";

const HomeTopDestinations = () => {
  
  return (
    <section className='TopDestinationSection'>
      <div className="TopDestinationContainer">
        <h3>Top Destinations</h3>
        <main>
          {TopDestinationData.map((destination, index) => (
            <TopDestinationsCard
              key={index}
              title={destination.title}
              description={destination.description}
              imageUrl={destination.imageUrl}
            />
          ))}
        </main>
      </div>
    </section>
  );
};

export default HomeTopDestinations;