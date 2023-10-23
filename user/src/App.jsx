import { Route, Routes, } from "react-router-dom";
import HomePage from "./pages/shared/HomePage/HomePage";
import NavBar from "./components/shared/NavBar/NavBar";
import CartPage from "./pages/user/CartPage/CartPage";
import Footer from "./components/shared/Footer/Footer";
import LoginPage from "./pages/user/LoginPage/LoginPage";
import SignUpPage from "./pages/user/SignUpPage/SignUpPage";
import ReservePage from "./pages/user/ReservePage/ReservePage";
import ProtectedRoutes from "./auth/ProtectedRoutes";
import PageNotFound from "./pages/shared/PageNotFound/PageNotFound";
import SearchPage from "./pages/shared/SearchPage/SearchPage";
import SettingsPage from "./pages/user/SettingsPage/SettingsPage";
import Wrapper from "./components/shared/Wrapper/Wrapper";
import ScrollToTopButton from "./components/shared/ScrollToTopButton/ScrollToTopButton";
import PackageViewPage from "./pages/shared/PackageViewPage/PackageViewPage";

const App = () => {
  return (
    <>
      <NavBar/>
        <Wrapper>
          <Routes>
              <Route path="/" element={<HomePage/>}/>
              <Route path="/package/:id" element={<PackageViewPage/>}/> 
              <Route path="/search/result" element={<SearchPage/>}/>
              <Route path="/login" element={<LoginPage/>}/>
              <Route path="/sign-up" element={<SignUpPage/>}/>
              <Route path="*" element={<PageNotFound/>}/>
              <Route path="/settings" element={
                <ProtectedRoutes>
                  <SettingsPage/>
                </ProtectedRoutes>
              }/>
              <Route path="/tours/reserve/:id" element={
                <ProtectedRoutes>
                  <ReservePage/>
                </ProtectedRoutes>
              }/>
              <Route path="/cart" element={
                <ProtectedRoutes>
                  <CartPage/>
                </ProtectedRoutes>
              }/>
          </Routes>
        </Wrapper>
      <ScrollToTopButton/>
      <Footer/>
    </>
  );
};

export default App;
