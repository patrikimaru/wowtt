import "./HomePage.css";
import HomeBanner from "./HomeSection/HomeBanner/HomeBanner";
import HomeMainContent from "./HomeSection/HomeMainContent/HomeMainContent";
import HomeTopDestinations from "./HomeSection/HomeTopDestinations/HomeTopDestinations";

const HomePage = () => {
  return (
    <section className="PageContainer HomePage">
      <HomeBanner />
      <>
        <HomeTopDestinations />
        <HomeMainContent/>
      </>
    </section>
  );
};

export default HomePage;