"use client";
import React from "react";
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
  Link,
} from "@chakra-ui/react";
import { Flex } from "@chakra-ui/react";
import PreparadorList from "./preparadorList";

const VerAcond = () => {
  return (
    <div>
      <Box bg='#FFA570' w='100%' p={4} color='white'>
        <h1>Acondicionamintos Registrados</h1>
      </Box>
        <PreparadorList />
        <Box p={4}>
        <Link href="/Preparador">
            <Button
              bg="red.700"
              _hover={{ bg: "red.500" }}
              color="white"
              fontWeight="bold"
              py={2}
              px={4}
              rounded="md"
              outline="none"
              boxShadow="outline"
            >
              Atras
            </Button>
          </Link>
        </Box>
        
    </div>
  );
  };

export default VerAcond;




