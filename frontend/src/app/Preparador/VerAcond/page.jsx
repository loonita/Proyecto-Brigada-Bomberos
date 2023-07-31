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
} from "@chakra-ui/react";
import { Flex } from "@chakra-ui/react";
import PreparadorList from "./preparadorList";

const VerAcond = () => {
  return (
    <Box>
      <PreparadorList />
    </Box>
  );
  };

export default VerAcond;




