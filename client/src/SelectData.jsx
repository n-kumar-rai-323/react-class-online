import { useState } from "react"

function SelectData() {
    const [country, setCountry] = useState("");

    const data = {
        Nepal: ["Kathmandu", "Pokhara", "Lalitpur"],
        India: ["Delhi", "Mumbai", "Bangalore"]
    }
    function changeData(e) {
        setCountry(e.target.value)
        // console.log(e)

    }
    return (
        <>
            <div>
                <h1>Countery and City Dropdown</h1>
                <select value={country} onChange={changeData}>
                    <option value="">Select Country </option>
                    <option value="Nepal">Nepal</option>
                    <option value="India">India</option>
                </select>
                {country && (
                    <>
                        <h3>Select City</h3>
                        <select >
                            <option value="">Select City</option>
                            {data[country].map((city) => (
                                <option key={city}>{city}</option>
                            ))}
                        </select>
                    </>
                )
                }
            </div>
        </>
    )
}
export default SelectData