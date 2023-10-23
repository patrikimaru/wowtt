import "./Rate.css"
const Rate = ({ selectedOption, setSelectedOption }) =>{
    
    const options = [
        'Rating Low-High',
        'Rating High-Low',  
    ];
    
    const handleOptionChange = (e) =>{
        setSelectedOption(e.target.value);
    };
    
    return(
        <div className='Rate'>
            <select className='rate' value={selectedOption} onChange={handleOptionChange}>
                <option value="">Rating</option>
                {options.map((option, index)=>(
                    <option key={index} value={option}>
                        {option}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default Rate ;