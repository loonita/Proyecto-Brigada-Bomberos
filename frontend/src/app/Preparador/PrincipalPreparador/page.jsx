//Aqui se realizara el cuestionario 
"use client"
import {getPreparadores} from "@/data/preparadorData"
import { useEffect } from "react"
import { FormControl, FormLabel, FormErrorMessage, FormHelperText, Card} from '@chakra-ui/react'
import { Box,
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
    Select,
    Input,NumberInput,
    NumberInputField,
    NumberInputStepper,
    NumberIncrementStepper,
    NumberDecrementStepper,} from '@chakra-ui/react'
import { Html } from "next/document"

const PrincipalPreparador = () => {

  useEffect(() => {
    getPreparadores().then((res) => {
      console.log(res)
    }
    )
  }, [])

  return (
    <html>
      <body>
      <Box bg='#FFA570' w='100%' p={4} color='white'>
         Bievenido Preparador Fisico
      </Box>

    <Box w='100%' p={4} >
      <p>/</p>
      <FormLabel>Id Preparador Fisico</FormLabel>
      <Select placeholder='Seleccione ID de Preparador Fisico'>
        <option value='option1'>ID Pre 1</option>
        <option value='option2'>ID Pre 2</option>
        <option value='option3'>ID Pre 3</option>
      </Select>

      <p>/</p>
      <FormLabel>Id Brigadista</FormLabel>
      <Select placeholder='Seleccione ID de Brigadistas'>
        <option value='option1'>ID Bri 1</option>
        <option value='option2'>ID Bri 2</option>
        <option value='option3'>ID Bri 3</option>
      </Select>

      <p>/</p>
      <FormLabel>Ingrese fecha de Acondicionamiento</FormLabel>
      <Input
        placeholder="Select Date and Time"
        size="md"
        type="datetime-local"
      />
      <p>/</p>
      <FormControl>
        <FormLabel>Nombre Ejercicio</FormLabel>
        <Input type='Ingrese Nombre Ejercicio' />
        <FormHelperText>Ingrese el nombre del ejercicio que realizara el Brigadista</FormHelperText>
      </FormControl>
      <p>/</p>
      <FormLabel>Seleccione Categoria Ejercicio</FormLabel>
        <Select placeholder='Categoria Ejercicio'>
          <option value='option1'>Cardio</option>
          <option value='option2'>Ganar Resistencia</option>
          <option value='option3'>Aumento Masa Muscular</option>
        </Select>
      <p>/</p>
      <FormControl>
        <FormLabel>Enfoque Ejercicio</FormLabel>
        <Input type='Ingrese Enfoque Ejercicio' />
        <FormHelperText>Ingrese el enfoque del ejercicio que realizara el Brigadista</FormHelperText>
      </FormControl>
      <p>/</p>
      <FormLabel>Ingrese Series del Ejercicio</FormLabel>
        <NumberInput>
          <NumberInputField />
          <NumberInputStepper>
            <NumberIncrementStepper />
            <NumberDecrementStepper />
          </NumberInputStepper>
        </NumberInput>
        <p>/</p>
        <FormLabel>Ingrese Repeticiones del Ejercicio</FormLabel>
        <NumberInput>
          <NumberInputField />
          <NumberInputStepper>
            <NumberIncrementStepper />
            <NumberDecrementStepper />
          </NumberInputStepper>
        </NumberInput>
        </Box>
        </body>
      
    </html>
  )

} 
export default PrincipalPreparador



