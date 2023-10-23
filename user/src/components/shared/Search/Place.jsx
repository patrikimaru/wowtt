import { PlaceData } from '../../../data/PlaceData';
import "./Place.css"

const Place = ({ selectedOption, setSelectedOption }) =>{

    const handleOptionChange = (e) =>{
        setSelectedOption(e.target.value);
    };
    
    return(
        <div className='Place'>
            <select className='place' value={selectedOption} onChange={handleOptionChange}>
                <option value="">Place</option>
                {PlaceData.map((option, index)=>(
                    <option key={index} value={option.place}>
                        {option.place}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default Place ;