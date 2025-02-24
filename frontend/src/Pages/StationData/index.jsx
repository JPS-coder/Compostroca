import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import styles from "./StationData.module.css";

function StationData () {
    const [stationName, setStationName] = useState ("");
    const navigate = useNavigate;
    
    const handleStationData = async (e) => {
        e.preventDefault();


    }
    
}
export default StationData;