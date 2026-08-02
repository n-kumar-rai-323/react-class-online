import { useState } from "react";
import "./Select.css"

function selectData() {
    const [country, setCountry] = useState("")
    const data = {
        Nepal: ["Kathmandu", "Lalitpur", "Chitwan"],
        India: ["New delhi", "Kolkata", "Mumbai"]
    }
    function changeData(e) {
        setCountry(e.target.value)
        console.log(e.target.value)
    }
    function handleClick(e) {
        if (country == "") {
            alert("Please Enter the data.")
        }else{
            alert("Data Submitted Successfully..")
        }

    }
    return <>
        <div className="main">
            <h1>Select Your Country</h1>
            <select value={country} onChange={changeData}>
                <option value="">Select Your Country</option>
                <option value="Nepal">Nepal</option>
                <option value="India">India</option>
            </select>

            {country &&
                <>
                    <h3>select your city</h3>
                    <select>
                        <option value="">Select your city </option>
                        {data[country].map((city) =>
                            <option key={city}>{city}</option>
                        )}

                    </select>
                </>
            }
            <button onClick={handleClick}>Submit</button>
        </div>
    </>
}

export default selectData;