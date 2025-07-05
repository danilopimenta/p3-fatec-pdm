import React from 'react'
import {xssSanitizer} from '../utils/sanitizers'
import {Card} from "primereact/card";

export default function Clima({data, type}) {
    if (!data) return null
    const {temp_min, temp_max, pressure, humidity} = data.main
    if (type === 'minmax') {
        return (
            <Card title="Previsão">
                <div className="flex flex-column gap-2">
                    <p>Mínima: {xssSanitizer(temp_min)} °C</p>
                    <p>Máxima: {xssSanitizer(temp_max)} °C</p>
                </div>
            </Card>
        )
    }
    return (
        <Card title="Previsão">
            <div className="flex flex-column gap-2">
                <p>Pressão: {xssSanitizer(pressure)} hPa</p>
                <p>Umidade: {xssSanitizer(humidity)} %</p>
            </div>
        </Card>
    )
}
