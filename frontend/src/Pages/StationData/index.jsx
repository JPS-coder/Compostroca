<<<<<<< HEAD
import React from 'react'

function StationData () {
    return (
        <h1>Dados da Estaçao</h1>
    )
}
=======
import React from "react";
import { Link } from "react-router-dom";
import styles from "./stationData.module.css";


function StationData() {
    return (
        <section>
            <h1>Dados da Estação</h1>
            <form method="post">
            {/*Nome da Estação*/}
            <label for="nome da estação">Nome da Estação</label>
            <input type="text" id="nome_da_estação" name="nome da estação" required/>

            {/*Volume por Estação*/}
            <label for="volume da estação">Volume da Estação</label>
            <input type="float" id="volume_da_estação" name="volume da estação" required/>

            {/*Volume por Pessoa*/}
            <label for="volume por pessoa">Volume por Pessoa</label>
            <input type="float" id="volume_por_pessoa" name="volume por pessoa" required/>

            {/*Volume Total*/}
            <label for="volume Total">Volume Total</label>
            <input type="float" id="volume_total" name="volume total" required/>

            {/*Emissões evitadas de CO2*/}
            <label for="emissões evitadas de CO2">Emissões evitadas de CO2</label>
            <input type="float" id="emissões_evitadas_de_CO2" name="emissões evitadas de CO2" required/>

            

            
            </form>
        </section>
    )
}

>>>>>>> 6e889b6877fc8975a36929568fbac7f7ba4f4e35
export default StationData