"use client";
import React from "react";
import Logout from "@/components/Logout";
import PrivateRoute from "@/components/PrivateRoute";
import useAuth from "@/hooks/useAuth";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Heading,
  Text,
} from "@chakra-ui/react";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
} from "@chakra-ui/react";

export default function Home() {
  const { user } = useAuth();

  return (
    <PrivateRoute>
      <Heading>Home page</Heading>
      <Menu>
        <MenuButton>MENU</MenuButton>
        <MenuList>
          <MenuItem as="a" href="/Agendar">
            Agendar cita nutricionista
          </MenuItem>
          <MenuItem as="a" href="/Preparador">
            Agendar cita Preparador Fisico 
          </MenuItem>
          <MenuItem as="a" href="sdff">
            Link 2
          </MenuItem>
        </MenuList>
      </Menu>

      <Card>
        <CardBody>
          <Text>Iniciaste sesion como {user?.email}</Text>
        </CardBody>
      </Card>
      <Logout />
    </PrivateRoute>
  );
}
