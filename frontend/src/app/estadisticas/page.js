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
  TableContainer
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
    <div style={{ background: "#1a202c", minHeight: "100vh", color: "#fff" }}>
      {/* Header section */}
      <Box bg={"blue.900"} p={4}>
        <Heading fontSize="3xl" textAlign="center">
          Estadísticas
        </Heading>
        <Link href="/estadisticas/statsBrigadistas">
          <Box
            as="button"
            bg="blue.500"
            color="white"
            borderRadius="md"
            py={2}
            px={4}
            fontSize="md"
            fontWeight="medium"
            _hover={{ bg: "blue.600" }}
            _active={{ bg: "blue.700" }}
            _focus={{ outline: "none" }}
            display="block"
            width="fit-content"
            mx="auto"
          >
            Ir a Gráficos
          </Box>
        </Link>
      </Box>

      {/* Main content */}
      <Box p={4}>
        <br />
        {brigadistas.length > 0 ? (
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
        ) : (
          <p>No hay brigadistas registrados</p>
        )}
      </Box>
    </div>
  );
};

export default StatsPage;
