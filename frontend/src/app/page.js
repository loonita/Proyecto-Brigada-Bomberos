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
      <Heading>Brigada de Bomberos</Heading>
      <Menu>
        <MenuButton>MENU</MenuButton>
        <MenuList>
          <MenuItem as="a" href="/Perfil">
            Perfil
          </MenuItem>
          <MenuItem as="a" href="/Agendar">
            Agendamiento Nutricionista
          </MenuItem>
          <MenuItem as="a" href="/">
            Agendamiento Fisico
          </MenuItem>
          <MenuItem as="a" href="/">
            Estadisticas
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
