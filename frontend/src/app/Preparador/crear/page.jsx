"use client";
// CrearAcondic.js
import Link from "next/link";
import { useState, useEffect } from "react";
import { Select } from "@chakra-ui/react";
import PreparadorForm from "../preparadorForm";
import { useParams, useRouter } from "next/navigation";
import { createCita } from "@/data/preparadorData";
import {
    Box,
    Button,
    FormControl,
    FormLabel,
    Input,
    Textarea,
  } from "@chakra-ui/react";

  //const router = useRouter(); // Corregido, importa desde "next/router"

  const CrearAcondic = () => {
    const [crear, setCrear] = useState({
        preparador_fisico: "",
        brigadista: "",
        fecha: "",
        nombreEjercicio: "",
        categoriaEjercicio: "",
        enfoqueEjercicio: "",
        seriesEjercicio: "",
        repeticionesEjercicio: "",
    });
  
    const params = useParams();
    const { push } = useRouter();
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      console.log(params);
      try {
        await createCita(crear);
        push("/Preparador/VerAcond");
      } catch (err) {
        console.log(err);
      }
    };

  return (
    <PreparadorForm
      crear={crear}
      setCrear={setCrear}
      handleSubmit={handleSubmit}
    />
  );
};

export default CrearAcondic;