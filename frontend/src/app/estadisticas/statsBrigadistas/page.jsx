'use client'
import { useEffect, useState } from 'react';
import { Box, Button, Heading, VStack } from '@chakra-ui/react';
import { Line } from 'react-chartjs-2';
import { useClient } from 'next/client'
import axios from 'axios';

const CombinedPage = () => {
    const isClient = useClient(); // Verifica si el componente se está ejecutando en el cliente

    const [users, setUsers] = useState([]);
    const [selectedUserId, setSelectedUserId] = useState(null);
    const [userData, setUserData] = useState(null);

    useEffect(() => {
        // Actualiza el título del documento usando la API del navegador
        document.title = 'Estadísticas de brigadistas';
        if (isClient) {
            fetchUsers();
        }
    }, []);

    const fetchUser = async (id) => {
        try {
            const response = await axios.get(`/api/stats/${id}`);
            setUserData(response.data);
        } catch (error) {
            console.log(error);
        }
    };

    const handleUserSelect = (id) => {
        setSelectedUserId(id);
        fetchUser(id);
    };

  return (
    <VStack spacing={4}>
      {selectedUserId ? (
        <Box>
          <Heading as="h1" size="lg" mb={4}>
            {userData?.user.name}
          </Heading>
          {userData ? (
            <Box width="100%">
              <Line
                data={{
                  labels: ['Atributo 1', 'Atributo 2', 'Atributo 3'], // Reemplaza con los atributos reales
                  datasets: [
                    {
                      label: 'Valores',
                      data: [userData.stats.attr1, userData.stats.attr2, userData.stats.attr3], // Reemplaza con los atributos reales
                      borderColor: 'rgba(75, 192, 192, 1)',
                      borderWidth: 2,
                      fill: false,
                    },
                  ],
                }}
              />
            </Box>
          ) : (
            <div>Loading...</div>
          )}
          <Button onClick={() => setSelectedUserId(null)}>Volver a la selección de usuario</Button>
        </Box>
      ) : (
        <VStack spacing={4}>
          {users.map((user) => (
            <Button key={user._id} onClick={() => handleUserSelect(user._id)} variant="outline">
              {user.name}
            </Button>
          ))}
        </VStack>
      )}
    </VStack>
  );
};

export default CombinedPage;
