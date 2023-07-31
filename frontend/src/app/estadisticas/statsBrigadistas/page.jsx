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
  Select,
} from "@chakra-ui/react";
import Link from "next/link";
import { getBrigadistas } from "@/data/statsdata";
import { useRouter } from "next/router";
import { Bar } from "react-chartjs-2";
import { Chart, registerables } from "chart.js";

Chart.register(...registerables);

const StatsBrigadistas = () => {
  const [brigadistas, setBrigadistas] = useState([]);
  const [brigadista, setBrigadista] = useState({
    id: "",
    nombre: "",
    email: "",
    roles: [],
    peso: 0.0,
    altura: 0.0,
    fechaNacimiento: null,
    genero: "",
    telefono: "",
    rut: "",
    domicilio: "",
    imc: 0.0,
  });

  const [chartData, setChartData] = useState({
    labels: ["Peso", "Altura"],
    datasets: [
      {
        label: "Estadísticas",
        backgroundColor: ["rgba(75, 192, 192, 0.6)", "rgba(54, 162, 235, 0.6)"],
        borderColor: ["rgba(75, 192, 192, 1)", "rgba(54, 162, 235, 1)"],
        borderWidth: 1,
        data: [brigadista.peso, brigadista.altura],
      },
    ],
  });

  const optionsBrigadistas = () => {
    return brigadistas.map((brigadista) => {
      return (
        <option key={brigadista._id} value={brigadista._id}>
          {brigadista.name}
        </option>
      );
    });
  };

  useEffect(() => {
    getBrigadistas().then((res) => {
      setBrigadistas(res.data);
    });
  }, []);

  useEffect(() => {
    setChartData({
      ...chartData,
      datasets: [
        {
          ...chartData.datasets[0],
          data: [brigadista.peso, brigadista.altura],
        },
      ],
    });
  }, [brigadista]);

  return (
    <Box>
      <Heading>Estadísticas de Brigadistas</Heading>
      <Box>
        <Select
          placeholder="Seleccione un Brigadista"
          onChange={(e) => {
            const selectedBrigadista = brigadistas.find(
              (brigadista) => brigadista._id === e.target.value
            );
            setBrigadista(selectedBrigadista);
          }}
        >
          {optionsBrigadistas()}
        </Select>
      </Box>
      <Box mt={4}>
        <Bar
          data={chartData}
          options={{
            responsive: true,
            scales: {
              y: {
                type: "linear",
                beginAtZero: true,
                max: 200, // Set the maximum value for the y-axis
              },
            },
          }}
        />
      </Box>
    </Box>
  );
};

export default StatsBrigadistas;
