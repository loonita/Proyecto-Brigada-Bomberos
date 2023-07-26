'use client';
import useAuth from '@/hooks/useAuth';
import Link from 'next/link';

const PrivateRoute = ({ children }) => {
  const { token } = useAuth();

  // Si el usuario ha iniciado sesión, renderizar los componentes hijos
  return <>{!token? <main>
    <p>Debes iniciar sesion para ver esta pagina</p>
    <br />
    <Link href="/signin">
      Ir al login 
    </Link>
  </main>:children}</>;
};

export default PrivateRoute;
