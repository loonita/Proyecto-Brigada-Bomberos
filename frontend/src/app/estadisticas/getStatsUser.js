"use client";
import { useEffect, useState } from "react";

const getBrigadistas = async () => {

    useEffect(() => {
        // Actualiza el título del documento usando la API del navegador
        document.title = "Tabla Brigadistas";
    }, []);

    const res = await fetch("http://localhost:3000/api/brigadistas");
    const json = await res.json();
    return json;
}

export default getBrigadistas;

