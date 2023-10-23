import './Price.css'
const Price = ({ selectedOption, setSelectedOption }) =>{
    
    const options = [
        'Pricing Low-High',
        'Pricing High-Low',
    ];

    const handleOptionChange = (e) =>{
        setSelectedOption(e.target.value);
    };
    
    return(
        <div className='Price'>
            <select className='price' value={selectedOption} onChange={handleOptionChange}>
                <option value="">Price</option>
                {options.map((option, index)=>(
                    <option key={index} value={option}>
                        {option}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default Price ;