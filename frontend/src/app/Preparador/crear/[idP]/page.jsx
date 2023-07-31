"use client";
import { useEffect, useState } from "react";
import PreparadorForm from "../preparadorForm";
import { useParams, useRouter } from "next/navigation";
import { updateCrear, getCrear } from "@/data/preparadorData";

const EditCrear = () => {
  const params = useParams();

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

  useEffect(() => {
    getCrear(params.id).then((res) => {
      if (res.success) {
        setCrear(res.data);
      }
    });
  }, []);

  const { push } = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await updateCrear(params.id, crear);
      push("/Preparador");
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

export default EditCrear;



