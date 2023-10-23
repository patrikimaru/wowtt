import "./SearchBar.css";
import Input from '../Input/Input';
import Button from "../Button/Button";
import { IoSearchOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const handleSearch = () => {
    if (searchQuery.trim() === "") {
      alert("Please enter a search query.");
    } else {
      navigate(`search/result/?query=${searchQuery}`);
      setSearchQuery("");
      window.scrollTo(0, 0);
    }
  };

  return (
    <div className='SearchBar'>
      <IoSearchOutline/>
      <Input 
        type="text" 
        placeholder="Search where you want to go"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <Button 
        variant="primary"
        onClick={handleSearch}>
          Search
      </Button>
    </div>
  );
};

export default SearchBar;
