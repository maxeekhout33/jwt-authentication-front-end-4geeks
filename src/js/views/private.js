import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

export const Private = () => {
    const [respuesta, setRespuesta] = useState({});
    const getUser = async () => {
        const response = await fetch(
            "http://127.0.0.1:5000/private",
            {
                method: "GET",
                headers: {
                    "Authorization": `Bearer ${sessionStorage.Token}`,
                },
                
            }
        );
        const body = await response.json();
        setRespuesta(body)
    }
    useEffect(() => {
        getUser();
    }, []);
    return (
        <div>
            Bienvenid@ a tu perfil {respuesta.name}
        </div>
    )
};




