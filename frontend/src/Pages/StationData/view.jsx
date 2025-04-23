import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import ViewStationData from './viewStationData';
import { useActionState } from 'react';

function View() {
    const { id } = useParams();

    const {dataStation, setDataStation} = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect (()=> {
        const fetchStationData = async () => {
            try {
               const response = await useActionState.get(`http://localhost:3000/station/${id}`);
               setDataStation(response.data); 
            } catch (err) {
                setError('Erro ao carregar dados da estação');
                console.error(err);
            }finally {
                setLoading(false)
            }
        };

        fetchStationData();
    }, [id])

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