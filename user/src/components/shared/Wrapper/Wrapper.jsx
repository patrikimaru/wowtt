import { useLocation } from 'react-router-dom';
import { useLayoutEffect } from 'react';

//When the user navigates, this function listens for every click and scrolls to the top

const Wrapper = ({children}) => {
  const location = useLocation();

  useLayoutEffect(() => {
    document.documentElement.scrollTo(0, 0);
  }, [location.pathname]);

  return children;
} ;

export default Wrapper;