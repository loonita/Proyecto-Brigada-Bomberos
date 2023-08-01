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
import Link from 'next/link';
import { getBrigadistas } from '@/data/statsdata';
import { getRegistro, getOnlyUser } from '@/data/statsdata';

const Registro = () => {
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

    useEffect(() => {
        getBrigadistas().then((res) => {
            if (res.status === 200) {
                setBrigadistas(res.data);
            }
        }).catch((err) => {
            console.log(err);
        });
    }, []);

    const optionsBrigadistas = () => {
        return brigadistas.map((brigadista) => {
          return (
            <option key={brigadista._id} value={brigadista._id}>
              {brigadista.name}
            </option>
          );
        });
    };

    return (
        <Box p={4}>
            <Heading as="h1" size="lg" mb={4}>Registro de Brigadistas</Heading>
            <Box>
                <Select
                    placeholder='Selecciona un brigadista'
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
        </Box>
    );
};

export default Registro;
