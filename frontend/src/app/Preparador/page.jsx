"use client"
import {getPreparadores} from "@/data/preparadorData"
import { useEffect } from "react"


const Preparador = () => {

  useEffect(() => {
    getPreparadores().then((res) => {
      console.log(res)
    }
    )
  }, [])



  return (
    <form>
      <h1>Aqui se esta contruyendo Preaprador</h1>
      <input placeholder="Escribe Titulo" />
      <textarea placeholder="Escribe la descripcion" />
      <button>Guardar</button>
      </form>
  )
}

export default Preparador