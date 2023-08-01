"use client";
// preparadorForm.js
import Link from "next/link";
import { Box, Button, FormControl, FormLabel, Input, Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription, } from "@chakra-ui/react";
import { useState } from "react";
import { getBrigadistas, getPreparador } from "../../data/preparadorData";

const PreparadorForm = ({ crear, setCrear, handleSubmit }) => {
  const {
    preparador_fisico,
    brigadista,
    fecha,
    nombreEjercicio,
    categoriaEjercicio,
    enfoqueEjercicio,
    seriesEjercicio,
    repeticionesEjercicio,
  } = crear || {};

  return (
    <Box p={4}>
      <form onSubmit={handleSubmit}>
        <FormControl mb={4}>
          <FormLabel htmlFor="preparador_fisico" fontSize="sm" fontWeight="bold">
            Preparador
          </FormLabel>
          <Input
            id="preparador_fisico"
            value={preparador_fisico}
            onChange={(e) => setCrear({ ...crear, preparador_fisico: e.target.value })}
          />
        </FormControl>
        <FormControl mb={4}>
          <FormLabel htmlFor="brigadista" fontSize="sm" fontWeight="bold">
            Brigadista
          </FormLabel>
          <Input
            id="brigadista"
            value={brigadista}
            onChange={(e) => setCrear({ ...crear, brigadista: e.target.value })}
          />
        </FormControl>
        <FormControl mb={6}>
          <FormLabel htmlFor="fecha" fontSize="sm" fontWeight="bold">
            Fecha
          </FormLabel>
          <Input
            type="date"
            id="fecha"
            value={fecha}
            onChange={(e) => setCrear({ ...crear, fecha: e.target.value })}
          />
        </FormControl>
        <FormControl mb={6}>
          <FormLabel htmlFor="nombreEjercicio" fontSize="sm" fontWeight="bold">
            Nombre de Ejercicio/s
          </FormLabel>
          <Input
            id="nombreEjercicio"
            value={nombreEjercicio}
            onChange={(e) => setCrear({ ...crear, nombreEjercicio: e.target.value })}
          />
        </FormControl>
        <FormControl mb={6}>
          <FormLabel htmlFor="categoriaEjercicio" fontSize="sm" fontWeight="bold">
            Categoría de Rutina
          </FormLabel>
          <Input
            id="categoriaEjercicio"
            value={categoriaEjercicio}
            onChange={(e) => setCrear({ ...crear, categoriaEjercicio: e.target.value })}
          />
        </FormControl>
        <FormControl mb={6}>
          <FormLabel htmlFor="enfoqueEjercicio" fontSize="sm" fontWeight="bold">
            Enfoque y comentarios de Rutina
          </FormLabel>
          <Input
            id="enfoqueEjercicio"
            value={enfoqueEjercicio}
            onChange={(e) => setCrear({ ...crear, enfoqueEjercicio: e.target.value })}
          />
        </FormControl>
        <FormControl mb={6}>
          <FormLabel htmlFor="seriesEjercicio" fontSize="sm" fontWeight="bold">
            Serie del Ejercicio
          </FormLabel>
          <Input
            id="seriesEjercicio"
            value={seriesEjercicio}
            onChange={(e) => setCrear({ ...crear, seriesEjercicio: e.target.value })}
          />
        </FormControl>
        <FormControl mb={6}>
          <FormLabel htmlFor="repeticionesEjercicio" fontSize="sm" fontWeight="bold">
            Repeticiones del Ejercicio
          </FormLabel>
          <Input
            id="repeticionesEjercicio"
            value={repeticionesEjercicio}
            onChange={(e) => setCrear({ ...crear, repeticionesEjercicio: e.target.value })}
          />
        </FormControl>
        <Box display="flex" alignItems="center" justifyContent="center">
          <Button
            type="submit"
            bg="blue.500"
            _hover={{ bg: "blue.700" }}
            color="white"
            fontWeight="bold"
            py={2}
            px={4}
            rounded="md"
            outline="none"
            boxShadow="outline"
            mr={4}
          >
            Guardar
          </Button>
          <Link href="/Preparador">
            <Button
              bg="red.700"
              _hover={{ bg: "red.500" }}
              color="white"
              fontWeight="bold"
              py={2}
              px={4}
              rounded="md"
              outline="none"
              boxShadow="outline"
            >
              Atras
            </Button>
          </Link>
        </Box>
      </form>
    </Box>
  );
};

export default PreparadorForm;
