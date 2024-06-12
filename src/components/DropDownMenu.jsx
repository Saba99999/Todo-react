import "./dropDownMenu.css"
import { useState } from "react";

function DropDownMenu({hendleSelectedOption}) {
    const options = ["All", "IsChekd", "UnCheckd"]

    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState("All");

    const toggleDropDown = (e) => {
        e.preventDefault();

        setIsOpen(!isOpen)
    }

    const selectDropDown = (option) =>{
        setSelectedOption(option);
        hendleSelectedOption(option);
        setIsOpen(false);
    }


    return(
        <div className="dropDownMenue">
            <button type="submit" className="dropDownBtn" onClick={toggleDropDown}>{selectedOption || "All"}</button>
            {isOpen && (
                <ul className="options-ul">
                    {options.map((option, index) => (
                        <li key={index} onClick={() => selectDropDown(option)} className="options">{option}</li>
                    ))}
                </ul>
            )}
        </div>
    );
}

export default DropDownMenu;