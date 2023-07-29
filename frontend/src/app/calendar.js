import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Box } from "@chakra-ui/react";

const Calendar = () => {
  const [selectedDate, setSelectedDate] = useState(null);

  return (
    <Box p={4}>
      <DatePicker
        selected={selectedDate}
        onChange={(date) => setSelectedDate(date)}
        placeholderText="Selecciona una fecha"
        // Puedes agregar otras propiedades para personalizar el calendario aquí
      />
    </Box>
  );
};
