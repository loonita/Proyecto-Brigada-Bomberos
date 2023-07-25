import React, { useState } from 'react';
import Dropdown from 'react-dropdown-select';
import Link from "next/link";

const App = () => {
  // Estado para mantener la opción seleccionada en el menú
  const [selectedOption, setSelectedOption] = useState(null);

  // Datos de ejemplo de usuarios (puedes cambiarlo con tus datos)
  const users = [
    { id: 1, name: 'Usuario 1', age: 25, email: 'usuario1@example.com' },
    { id: 2, name: 'Usuario 2', age: 30, email: 'usuario2@example.com' },
    { id: 3, name: 'Usuario 3', age: 22, email: 'usuario3@example.com' },
  ];

  // Función para manejar el cambio de opción seleccionada en el menú
  const handleOptionChange = (option) => {
    setSelectedOption(option);
  };

  // Renderizar la tabla de atributos de usuario si hay una opción seleccionada
  const renderUserTable = () => {
    if (selectedOption) {
      const user = users.find((u) => u.name === selectedOption.value);

      if (user) {
        return (
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Nombre</th>
                <th>Edad</th>
                <th>Email</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.age}</td>
                <td>{user.email}</td>
              </tr>
            </tbody>
          </table>
        );
      }
    }

    return null;
  };

  return (
    <div className="App">
      <h1>Menú Desplegable con Tabla de Usuarios</h1>
      <Dropdown
        options={[
          { label: 'Usuario 1', value: 'Usuario 1' },
          { label: 'Usuario 2', value: 'Usuario 2' },
          { label: 'Usuario 3', value: 'Usuario 3' },
        ]}
        values={[selectedOption]}
        onChange={(value) => handleOptionChange(value[0])}
      />
      {renderUserTable()}
    </div>
  );
};

export default App;
