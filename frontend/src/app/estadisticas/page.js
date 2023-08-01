"use client";
import React, { useEffect, useState } from "react";
import {
  Heading,
  Box,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Button,
} from "@chakra-ui/react";
import Link from "next/link";
import { getBrigadistas } from "@/data/statsdata";

const StatsPage = () => {
  const [brigadistas, setBrigadistas] = useState([]);

  useEffect(() => {
    getBrigadistas()
      .then((res) => {
        if (res.state === "Success") {
          setBrigadistas(res.data);
        }
      })
      .catch((error) => {
        console.log("Error fetching brigadistas: ", error);
      });
  }, []);

  return (
    <Box bg="#313236" minHeight="100vh" color="#F3F3FB"> {/* Apply the secondary background color and text color */}
      {/* Header section */}
      <Box bg="#1a202c" p={4}> {/* Apply the primary color to the header */}
        <Heading fontSize="3xl" textAlign="center">
          Estadísticas
        </Heading>
        <br />
        <Box display="flex" justifyContent="center" gap={4}>
          <Link href="/estadisticas/statsBrigadistas">
            <Box
              as="button"
              bg="#FFA570" // Use the yellow color for the buttons
              color="white"
              borderRadius="md"
              py={2}
              px={4}
              fontSize="md"
              fontWeight="medium"
              _hover={{ bg: "#FEE3A2" }} // Change the hover color to a lighter shade of yellow
              _active={{ bg: "#FEE3A2" }} // Change the active color to a lighter shade of yellow
              _focus={{ outline: "none" }}
              display="block"
              width="fit-content"
            >
              Ir a Gráficos
            </Box>
          </Link>
          <Link href="/estadisticas/Registro">
            <Box
              as="button"
              bg="#FFA570" // Use the yellow color for the buttons
              color="white"
              borderRadius="md"
              py={2}
              px={4}
              fontSize="md"
              fontWeight="medium"
              _hover={{ bg: "#FEE3A2" }} // Change the hover color to a lighter shade of yellow
              _active={{ bg: "#FEE3A2" }} // Change the active color to a lighter shade of yellow
              _focus={{ outline: "none" }}
              display="block"
              width="fit-content"
            >
              Ir a Registro
            </Box>
          </Link>
        </Box>
      </Box>

      {/* Main content */}
      <Box p={4}>
        <br />
        <TableContainer>
          <Table>
            <TableCaption>Brigadistas</TableCaption>
            <Thead>
              <Tr>
                <Th>Nombre:</Th>
                <Th>Email:</Th>
                <Th>Peso:</Th>
                <Th>Altura:</Th>
                <Th>Fecha Nacimiento:</Th>
                <Th>Género:</Th>
                <Th>IMC:</Th>
              </Tr>
            </Thead>
            <Tbody>
              {brigadistas.map((brigadista) => (
                <Tr key={brigadista._id}>
                  <Td>{brigadista.name}</Td>
                  <Td>{brigadista.email}</Td>
                  <Td>{brigadista.peso}</Td>
                  <Td>{brigadista.altura}</Td>
                  <Td>{brigadista.fechaNacimiento}</Td>
                  <Td>{brigadista.genero}</Td>
                  <Td>{brigadista.imc}</Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </TableContainer>
      </Box>
    </Box>
  );
};

export default StatsPage;
