"use client"
import { useState, useEffect } from "react";
import SearchBar from "../searchbar/searchBar";
import Link from "next/link";
import Image from "next/image";
import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [userData, setUserData] = useState<{ name: string; address: string } | null>(null);
  const auth = useAuth();
  const { token, user, logOut } = auth || {};
  const router = useRouter();

  useEffect(() => {
    if (user && typeof user === "object") {
      setUserData(user);
    }
  }, [user]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLogOut = () => {
    if (logOut) logOut();
    alert("Sesión cerrada con éxito");
    router.push("/login");
  };

  return (
    <nav className="bg-secondaryColor flex items-center justify-between p-4 relative">
      <div className="flex items-center justify-between w-full">
        <div className="border-none cursor-pointer focus:outline-none relative mr-4">
          <Link href="/" passHref>
            <Image src="/TecnoShop.png" alt="Logo" width={150} height={100} />
          </Link>
        </div>
        {token ? (
          <div className="flex items-center mr-4">
            <p className="text-white">
              entregar en:<br />
              {userData?.address}
            </p>
          </div>
        ) : (
          <div className="flex items-center mr-4">
            <p className="text-white">entregar en:</p>
          </div>
        )}
        <div className="flex-grow mr-2">
          <SearchBar />
        </div>
        <div>
          {!user ? (
            <button
              onClick={toggleMenu}
              className="text-white font-medium py-2 px-4 rounded hover:bg-gray-600 transition-colors"
            >
              Hola, Identifícate
              <br />
              Cuenta y más
            </button>
          ) : (
            <button
              onClick={toggleMenu}
              className="text-white font-medium py-2 px-4 rounded hover:bg-gray-600 transition-colors"
            >
              {userData?.name}
            </button>
          )}
          {isMenuOpen && (
            <div className="absolute top-full w-48 bg-white border rounded-lg shadow-lg">
              <div className="flex flex-col">
                {!token && (
                  <>
                    <Link href="/login" className="block px-4 py-2 text-secondaryColor hover:bg-gray-200 transition-colors">
                      Ingresa
                    </Link>
                    <Link href="/register" className="block px-4 py-2 text-secondaryColor hover:bg-gray-200 transition-colors">
                      Registrate
                    </Link>
                  </>
                )}
                <Link href="/aboutus" className="block px-4 py-2 text-secondaryColor hover:bg-gray-200 transition-colors">
                  Nosotros
                </Link>
                {token && <Link href="/orders" className="block px-4 py-2 text-secondaryColor hover:bg-gray-200 transition-colors">Mis compras</Link>}
                {token && (
                  <button className="block px-4 py-2 text-secondaryColor hover:bg-gray-200 transition-colors text-start" onClick={handleLogOut}>
                    cerrar sesion
                  </button>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
      <Link href="/checkout" className="block px-4 py-2 text-secondaryColor hover:bg-gray-200 transition-colors hover:cursor-pointer">
        <Image src="/carritoBlanco.svg" alt="carrito" width={30} height={30} />
      </Link>
    </nav>
  );
};

export default Navbar;
