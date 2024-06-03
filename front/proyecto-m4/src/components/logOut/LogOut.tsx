import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import useAuth from "@/context/AuthContext";

export const LogOut = () => {
    const router = useRouter();
    const auth = useAuth();

    const handleLogOut = () => {
        Cookies.remove("token");
        localStorage.removeItem("user");
        auth?.user
        alert("Sesión cerrada con éxito");
        router.push("/login");

    }

    return (
        <>
            <button className="block px-4 py-2 text-secondaryColor hover:bg-gray-200 transition-colors text-start" onClick={handleLogOut}>cerrar sesion</button>
        </>
    );
}

export default LogOut;
