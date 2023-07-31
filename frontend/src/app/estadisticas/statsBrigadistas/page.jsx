"use client"
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
  Select,
} from "@chakra-ui/react";
import Link from "next/link";
import { getBrigadistas } from "@/data/agendarData";
import { useRouter } from "next/router";
import { Bar } from "react-chartjs-2";

const StatsPage = () => {
  const [brigadistas, setBrigadistas] = useState([]);
  const [selectedBrigadista, setSelectedBrigadista] = useState(null);
  const [chartData, setChartData] = useState(null);

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

  useEffect(() => {
    if (selectedBrigadista) {
      // Fetch data for the selected brigadista and update the chart data
      getChartData(selectedBrigadista.value);
    }
  }, [selectedBrigadista]);

  const handleBrigadistaChange = (selectedOption) => {
    setSelectedBrigadista(selectedOption);
  };

  const getChartData = (brigadistaId) => {
    // Fetch data for the selected brigadista from the API
    // and update the chart data.
    // For simplicity, I'll use random data here.
    const labels = ["Peso", "Altura", "IMC"];
    const data = [getRandomValue(), getRandomValue(), getRandomValue()];
    setChartData({
      labels: labels,
      datasets: [
        {
          label: "Estadísticas",
          data: data,
          backgroundColor: "rgba(75, 192, 192, 0.6)",
          borderColor: "rgba(75, 192, 192, 1)",
          borderWidth: 1,
        },
      ],
    });
  };

  const getRandomValue = () => {
    return Math.floor(Math.random() * 100);
  };

  return (
    <div style={{ background: "#1a202c", minHeight: "100vh", color: "#fff" }}>
      {/* Header section */}
      <Box bg={"black"} p={4}>
        <Heading fontSize="3xl" textAlign="center">
          Estadísticas
        </Heading>
      </Box>

      {/* Main content */}
      <Box p={4}>
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

        <br />

        {/* Dropdown Select */}
        <Select
          options={brigadistas.map((brigadista) => ({
            value: brigadista._id,
            label: brigadista.name,
          }))}
          value={selectedBrigadista}
          onChange={handleBrigadistaChange}
          placeholder="Seleccione un brigadista..."
        />

        {selectedBrigadista ? (
          <>
            {/* Table */}
            <TableContainer>
              <Table>
                <TableCaption>Estadísticas de {selectedBrigadista.label}</TableCaption>
                <Thead>
                  <Tr>
                    <Th>Métrica:</Th>
                    <Th>Valor:</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  <Tr>
                    <Td>Peso:</Td>
                    <Td>{getRandomValue()}</Td>
                  </Tr>
                  <Tr>
                    <Td>Altura:</Td>
                    <Td>{getRandomValue()}</Td>
                  </Tr>
                  <Tr>
                    <Td>IMC:</Td>
                    <Td>{getRandomValue()}</Td>
                  </Tr>
                  {/* Add more metrics here if needed */}
                </Tbody>
              </Table>
            </TableContainer>

            {/* Chart */}
            <Box mt={4}>
              {chartData && <Bar data={chartData} />}
            </Box>
          </>
        ) : (
          <p>Seleccione un brigadista para ver sus estadísticas.</p>
        )}
      </Box>
    </div>
  );
};

export default StatsPage;
