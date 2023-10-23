import "./ScrollToTopButton.css";
import { useEffect, useState }from 'react';


const ScrollToTopButton = () => {
  const [scrollTop, setScrollTop] = useState(false);
  
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 500) {
        setScrollTop(true);
      } else {
        setScrollTop(false);
      }
    });
  }, []);

  return (
    <>
     {scrollTop && (
        <button 
          onClick={() => window.scrollTo({top:0, behavior:"smooth"})} 
          className="scrollToTop">
          &#8593;
        </button>
      )}
    </>
  );
};

export default ScrollToTopButton;