"use client";
import { useEffect, useState } from "react";
import {
  Box,
  FormLabel,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  SimpleGrid,
  Heading,
  Button,
  Text,
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from "@chakra-ui/react";
import { getPreparadores } from "@/data/preparadorData";

const VerAcond = () => {
  const [preparadores, setPreparador] = useState([]);

  useEffect(() => {
    getPreparadores().then((res) => {
      console.log(res.data);
      setPreparador(res.data);
    });
  } , []);

  return (
    <div>
      <Box bg="tomato" w="200%" p={4} color="white">
        <FormLabel>Ver Acondicionamientos Fisicos De Brigadistas</FormLabel>
      </Box>
      <br/>
      <TableContainer>
  <Table variant='simple'>
    <TableCaption>Imperial to metric conversion factors</TableCaption>
    <Thead>
      <Tr>
        <Th>To convert</Th>
        <Th>into</Th>
        <Th isNumeric>multiply by</Th>
      </Tr>
    </Thead>
    <Tbody>
      {
        preparadores.map((preparador) => (
          <Tr>
            <Td>{preparador.nombre}</Td>
            <Td>{preparador.apellido}</Td>
            <Td isNumeric>{preparador.edad}</Td>
          </Tr>
        ))
      }
    </Tbody>
  </Table>
</TableContainer>
    </div>
  );
};

/*const VerAcond = () => {
  return (
    <html>
      <body>
        <Box bg='tomato' w='200%' p={4} color='white'>
          <FormLabel>Ver Acondicionamientos Fisicos De Brigadistas</FormLabel>
        </Box>

        <Box w='100%' p={4} >
          <FormLabel>Estamos Trabajando </FormLabel>
        </Box>
        <p>/</p>
        <SimpleGrid spacing={4} templateColumns='repeat(auto-fill, minmax(200px, 1fr))'>
        <Card>
            <CardHeader>
            <Heading size='md'>Brigadista 1</Heading>
            </CardHeader>
            <CardBody>
            <Text>Ver Acondicionamiento Brigadista</Text>
            </CardBody>
            <CardFooter>
            <Button>Ver</Button>
            </CardFooter>
        </Card>
        <Card>
            <CardHeader>
            <Heading size='md'> Brigadista 2</Heading>
            </CardHeader>
            <CardBody>
            <Text>Ver Acondicionamiento Brigadista</Text>
            </CardBody>
            <CardFooter>
            <Button>ver</Button>
            </CardFooter>
        </Card>
        <Card>
            <CardHeader>
            <Heading size='md'> Brigadista 3</Heading>
            </CardHeader>
            <CardBody>
            <Text>Ver Acondicionamiento Brigadista</Text>
            </CardBody>
            <CardFooter>
            <Button>Ver</Button>
            </CardFooter>
        </Card>
        </SimpleGrid>
        <p></p>
      </body>
    </html>
  )
}*/

export default VerAcond;
