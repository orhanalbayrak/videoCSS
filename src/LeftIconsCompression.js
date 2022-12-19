import React, { useState } from 'react';
import { RadioButton } from 'primereact/radiobutton';

const RadioButtonDemo = () => {
    const [city, setCity] = useState(null);

    return (
        <div>
            <div className="card">
                <h5>Basic</h5>
                <div className="field-radiobutton">
                    <RadioButton inputId="city1" name="city" value="Chicago" onChange={(e) => setCity(e.value)} checked={city === 'Chicago'} />
                    <label htmlFor="city1">Chicago</label>
                </div>
                <div className="field-radiobutton">
                    <RadioButton inputId="city2" name="city" value="Los Angeles" onChange={(e) => setCity(e.value)} checked={city === 'Los Angeles'} />
                    <label htmlFor="city2">Los Angeles</label>
                </div>
                <div className="field-radiobutton">
                    <RadioButton inputId="city3" name="city" value="New York" onChange={(e) => setCity(e.value)} checked={city === 'New York'} />
                    <label htmlFor="city3">New York</label>
                </div>
                <div className="field-radiobutton">
                    <RadioButton inputId="city4" name="city" value="San Francisco" onChange={(e) => setCity(e.value)} checked={city === 'San Francisco'} />
                    <label htmlFor="city4">San Francisco</label>
                </div>


            </div>
        </div>
    )
}
export default RadioButtonDemo;
