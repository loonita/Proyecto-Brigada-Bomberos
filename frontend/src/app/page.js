"use client";
import Logout from "@/components/Logout";
import PrivateRoute from "@/components/PrivateRoute";
import useAuth from "@/hooks/useAuth";
import { Card, CardHeader, CardBody, CardFooter,Heading,Text } from "@chakra-ui/react";

export default function Home() {
  const { user } = useAuth();

  return (
    <PrivateRoute>
        <Heading>Home page</Heading>
        <Card>
          <CardBody>
            <Text>
              Iniciaste sesion como {user?.email} 
            </Text>
          </CardBody>
        </Card>
        <Logout />
    </PrivateRoute>
  );
}
