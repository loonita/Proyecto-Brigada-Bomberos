'use client';
import React, { useEffect } from "react";
import { Box, Heading } from "@chakra-ui/react";
import Link from "next/link"; // Importa el componente Link de Next.js

const StatsPage = () => {
  useEffect(() => {
    // Actualiza el título del documento usando la API del navegador
    document.title = "Estadísticas";
  }, []);

  return (
    <section>
      <Box bg={"black"}>
        <Heading>Estadísticas</Heading>
      <Link href="/estadisticas/tablaBrigadistas">
        <p color="white" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
          Estadísticas
        </p>
      </Link>
      </Box>
      <Box bg={"black"}>
        <Heading>Estadísticas</Heading>
      <Link href="/getStatsUsers">
        <p color="white" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
          Estadísticas de Brigadistas
        </p>
      </Link>
      </Box>
    </section> 
  );
};

export default StatsPage;
