'use client';
import React, { useEffect } from "react";
import { Box, Heading } from "@chakra-ui/react";
import Link from "next/link"; // Importa el componente Link de Next.js

const TablaBrigadistas = () => {
  useEffect(() => {
    // Actualiza el título del documento usando la API del navegador
    document.title = "Tabla Brigadistas";
  }, []);

  return (
    <div>
      <h1>Hola, mundo desde la página TablaBrigadista</h1>
    </div>
  );
};

export default TablaBrigadistas;
