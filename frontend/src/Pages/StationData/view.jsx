import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import ViewStationData from './viewStationData';

function View() {
    const { name } = useParams();
    const [dataStation, setDataStation] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const formatStationData = (data) => ({
        nameStation: data.name_station,
        volStation: data.vol_station,
        volPerson: data.vol_person,
        volTotal: data.vol_total,
        co2Avoided: data.co2_avoided,
      });

    useEffect (()=> {
        const fetchStationData = async () => {
            try {
               const response = await axios.get(`http://localhost:3000/stationdata/${name}`);
               setDataStation(formatStationData(response.data));
               
            } catch (err) {
                setError('Erro ao carregar dados da estação');
                console.error(err);
            }finally {
                setLoading(false)
            }
        };

        fetchStationData();
    }, [name])

    if (loading) {
        return<div>Carregando....</div>;
    }

    if (error) {
        return <div>{error}</div>
    }
    
    return (
        <div>
            <h2>Dados da Estação</h2>
            {dataStation ? (
            <   ViewStationData data={dataStation} />
            ) : (
                <div>Estaçao não encontrada</div>
            )}
        </div>
    );
}

export default View;