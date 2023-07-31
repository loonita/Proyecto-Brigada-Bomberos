import React from "react";
import { Button as ChakraButton } from "@chakra-ui/react";

const Button = ({ label, onClick }) => {
  return (
    <ChakraButton colorScheme="blue" onClick={onClick}>
      {label}
    </ChakraButton>
  );
};

export default Button;
