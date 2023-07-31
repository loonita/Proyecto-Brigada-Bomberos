"use client"
import { useEffect, useState } from "react";
import { Box, Text, VStack, Button } from "@chakra-ui/react";
import { getPreparadores } from "@/data/preparadorData";
import BotonPreElim from "@/components/BotonPreElim";
import BotonPreMod from "@/components/BotonPreMod";

const PreparadorList = () => {
  const [citasPre, setcitasPre] = useState([]);

  useEffect(() => {
    getPreparadores()
      .then((res) => {
        console.log(res);
        if (res.state === "Success") {
          setcitasPre(res.data);
        }
      })
      .catch((error) => {
        console.log("Error fetching citasPre: ", error);
      });
  }, []);

  return (
    <VStack spacing={4} align="stretch" bg="gray.800" color="white" p={4}>
      {citasPre.length > 0 ? (
        citasPre.map((citaP) => (
          <Box
            key={citaP._id}
            p={4}
            borderWidth="1px"
            borderRadius="md"
            boxShadow="md"
            bg="#778D45" // Color amarillo para cada cuadro
          >
            <Text>Date: {citaP.date}</Text>
            <Text>Brigadista: {citaP.brigadista.name}</Text>
            <Text>Observaciones: {citaP.nombreEjercicio}</Text>
            <Text>categoria Ejercicio: {citaP.categoriaEjercicio}</Text>
            <Text>enfoque Ejercicio: {citaP.enfoqueEjercicio}</Text>
            <Text>series Ejercicio: {citaP.seriesEjercicio}</Text>
            <Text>repeticiones Ejercicio: {citaP.repeticionesEjercicio}</Text>
            <Box>
              <BotonPreMod id={citaP._id} />
              <BotonPreElim id={citaP._id} />
            </Box>
          </Box>
        ))
      ) : (
        <Text>No hay citasPre disponibles.</Text>
      )}
    </VStack>
  );
};

export default PreparadorList;