import React, { useState } from 'react'
import BuscaClima from './components/BuscaClima'
import Clima from './components/Clima'
import api from './utils/api'

export default function App() {
    const [clima, setClima] = useState(null)
    const [type, setType] = useState(null)
    const [error, setError] = useState(null)

    const handleQuery = async ({ lat, lon, type }) => {
        setType(type)
        setError(null)
        try {
            const res = await api.get('/weather', { params: { lat, lon } })
            setClima(res.data)
        } catch (err) {
            setError('Erro no backend')
            setClima(null)
        }
    }

    return (
        <div className="p-4 md:p-6 lg:p-8">
            <h1 className="text-2xl mb-4">Qual é o clima de hoje?</h1>
            <BuscaClima onChange={handleQuery} />
            <div className="mt-4">
                {error && <p className="text-red-600">{error}</p>}
                <Clima data={clima} type={type} />
            </div>
        </div>
    )
}