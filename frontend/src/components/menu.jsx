import React from "react";
import {
  Menu as ChakraMenu,
  MenuButton,
  MenuList,
  MenuItem,
} from "@chakra-ui/react";

export default function Menu() {
  return (
    <ChakraMenu>
      <MenuButton>MENU</MenuButton>
      <MenuList>
        <MenuItem as="a" href="/Perfil" color={"black"}>
          Perfil
        </MenuItem>
        <MenuItem as="a" href="/Agendar" color={"black"}>
          Agendamiento Nutricionista
        </MenuItem>
        <MenuItem as="a" href="/Preparador" color={"black"}>
          Preparador
        </MenuItem>
        <MenuItem as="a" href="/" color={"black"}>
          Estadísticas
        </MenuItem>
      </MenuList>
    </ChakraMenu>
  );
}
