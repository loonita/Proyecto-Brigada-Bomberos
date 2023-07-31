"use client";
// CrearAcondic.js
import Link from "next/link";
import { useState, useEffect } from "react";
import { Select } from "@chakra-ui/react";
import PreparadorForm from "../preparadorForm";
import { useParams, useRouter } from "next/navigation";
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
        preparador: "",
        brigadista: "",
        fecha: "",
        nombreEjercicio: "",
        categoriaEjercicio: "",
        enfoqueEjercicio: "",
        serieEjercicio: "",
        repeticionesEjercicio: "",
    });
  
    const params = useParams();
    const { push } = useRouter();
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      console.log(params);
      try {
        await createCitaP(crearP);
        push("/Preparador");
      } catch (err) {
        console.log(err);
      }
    };

  return (
    <PreparadorForm
      crearP={crear}
      setCrearP={setCrear}
      handleSubmit={handleSubmit}
    />
  );
};

export default CrearAcondic;