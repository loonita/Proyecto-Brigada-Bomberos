'use client';
import useAuth from '@/hooks/useAuth';
import Link from 'next/link';
import { React, Fragment } from 'react'
import { Heading } from '@chakra-ui/react'

const PrivateRoute = ({ children }) => {
  const { token } = useAuth();

  if (token) {
    return children
  } else {
    return (
        <Fragment>
            <Heading><p>Debes iniciar sesion para ver esta pagina</p></Heading>
            <Link href="/signin">
                Ir al login
            </Link>
        </Fragment>
    )
  }
};

export default PrivateRoute;
