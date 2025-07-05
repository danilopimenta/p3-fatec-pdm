import React, {useEffect, useState} from 'react';
import {InputText} from 'primereact/inputtext';
import {RadioButton} from 'primereact/radiobutton';
import {Button} from 'primereact/button';
import {validInput} from "../utils/sanitizers.js";

export default function BuscaClima({onChange}) {
    const [value, setValue] = useState('-23.561167625063238, -46.65648357473211');
    const [option, setOption] = useState(null);
    const [timerId, setTimerId] = useState(null)

    useEffect(() => {
        if (timerId) clearTimeout(timerId)
        const id = setTimeout(() => {
            if (validInput(value) && option) {
                const [lat, lon] = value.split(',').map(s => s.trim())
                onChange({ lat: Number(lat), lon: Number(lon), type: option })
            }
        }, 5000)
        setTimerId(id)
        return () => clearTimeout(id)
    }, [value, option])

    const handleOptionChange = (e) => {
        setOption(e.value)
    }

    const handleValueChange = (e) => {
        setValue(e.target.value)
    }

    return (
        <div className="flex flex-column gap-3">
            <InputText
                value={value}
                onChange={handleValueChange}
                placeholder="latitude, longitude"
            />
            <div className="flex align-items-center gap-3">
                <RadioButton
                    inputId="minmax"
                    name="type"
                    value="minmax"
                    checked={option === 'minmax'}
                    onChange={handleOptionChange}
                />
                <label htmlFor="minmax">temperatura mínima e máxima</label>

                <RadioButton
                    inputId="presshum"
                    name="type"
                    value="presshum"
                    checked={option === 'presshum'}
                    onChange={handleOptionChange}
                />
                <label htmlFor="presshum">pressão atmosférica e umidade relativa do ar</label>
            </div>
        </div>
    );
}
