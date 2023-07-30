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
        <Heading color={"white"}>Estadísticas</Heading>
      <Link href="/estadisticas/tablaBrigadistas">
        <Box color={"white"}>
          <p className="text-gray-300 hover:bg-white-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
            Estadísticas
          </p>
        </Box>
      </Link>
      </Box>
      <Box bg={"black"}>
        <Heading color={"white"}>Estadísticas</Heading>
      <Link href="/estadisticas/statsBrigadistas">
        <Box color={"white"}>
          <p color="white" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
            Estadísticas de Brigadistas
          </p>
        </Box>
      </Link>
      </Box>
    </section> 
  );
};

export default StatsPage;
