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
  Center,
} from "@chakra-ui/react";
import Link from "next/link";
import { useRouter } from "next/router";
import { Bar } from "react-chartjs-2";
import { Chart, registerables } from "chart.js";
import { getBrigadistas, getAllUsers } from "@/data/statsdata";

Chart.register(...registerables);

function getImc(peso, altura) {
  return peso / (altura * altura);
}

const StatsBrigadistas = () => {
  const [brigadistas, setBrigadistas] = useState([]);
  const [statsGenerales, setStatsGenerales] = useState([]);

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
    labels: ["Peso", "Altura", "IMC"],
    datasets: [
      {
        label: "Estadísticas",
        backgroundColor: ["rgba(75, 192, 192, 0.6)", "rgba(54, 162, 235, 0.6)", "rgba(255, 206, 86, 0.6)"],
        borderColor: ["rgba(75, 192, 192, 1)", "rgba(54, 162, 235, 1)", "rgba(255, 206, 86, 1)"],
        borderWidth: 1,
        data: [brigadista.peso, brigadista.altura, getImc(brigadista.peso, brigadista.altura)],
      },
    ],
  });

  const [ statsGenerale , setStatsGenerale] = useState({
    promedioEdad: 0.0,
    promedioAltura: 0.0,
    promedioPeso: 0.0,
    promedioIMC: 0.0,
  });

  const [chartGenerales, setChartGenerales] = useState({
    labels: ["Promedio Edad", "Promedio Altura", "Promedio Peso", "Promedio IMC"],
    datasets: [
      {
        label: "Estadísticas Generales",
        backgroundColor: ["rgba(75, 192, 192, 0.6)", "rgba(54, 162, 235, 0.6)", "rgba(255, 206, 86, 0.6)", "rgba(153, 102, 255, 0.6)"],
        borderColor: ["rgba(75, 192, 192, 1)", "rgba(54, 162, 235, 1)", "rgba(255, 206, 86, 1)", "rgba(153, 102, 255, 1)"],
        borderWidth: 1,
        data: [statsGenerale.promedioEdad, statsGenerale.promedioAltura, statsGenerale.promedioPeso, statsGenerale.promedioIMC],
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
    getAllUsers().then((res) => {
      const users = res.data;
      const calculatedStats = getAllUsers(users);
      setStatsGenerales(calculatedStats);
    });
  }, []);
  
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
          data: [brigadista.peso, brigadista.altura, getImc(brigadista.peso, brigadista.altura)],
        },
      ],
    });
  }, [brigadista]);

  useEffect(() => {
    setChartGenerales({
      ...chartGenerales,
      datasets: [
        {
          ...chartGenerales.datasets[0],
          data: [statsGenerale.promedioEdad, statsGenerale.promedioAltura, statsGenerale.promedioPeso, statsGenerale.promedioIMC],
        },
      ],
    });
  }, [statsGenerale]);

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
            plugins: {
              legend: {
                display: true,
                position: "top",
              },
              tooltip: {
                callbacks: {
                  label: function (context) {
                    const label = context.dataset.label || "";
                    const value = context.parsed.y || 0;
                    return label + ": " + value.toFixed(2);
                  },
                },
              },
            },
          }}
        />
      </Box>
      <Heading>Estadísticas Generales</Heading> 
      <Box mt={4}>
        <Bar
          data={chartGenerales}
          options={{
            responsive: true,
            scales: {
              y: {
                type: "linear",
                beginAtZero: true,
                max: 200, // Set the maximum value for the y-axis
              },
            },
            plugins: {
              legend: {
                display: true,
                position: "top",
              },
              tooltip: {
                callbacks: {
                  label: function (context) {
                    const label = context.dataset.label || "";
                    const value = context.parsed.y || 0;
                    return label + ": " + value.toFixed(2);
                  },
                },
              },
            },
          }}
        />
      </Box>
    </Box>
  );
};

export default StatsBrigadistas;
