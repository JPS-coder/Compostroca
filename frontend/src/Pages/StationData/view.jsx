import { useParams } from 'react-router-dom';
import ViewStationData from './viewStationData';

function View() {
    const { id } = useParams();

    // Simulaçao de Dados
    const dataStation = {
        nameStation: "Comunidade",
        volStation: 1000,
        volPerson: 20,
        volTotal: 20000,
        co2Avoided: 450,
    }
    return (
        <div>
            <h1>Dados da Estação</h1>
            <ViewStationData data={dataStation} />
        </div>
    );
}

export default View;