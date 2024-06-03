"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import axios from "axios";

const RegisterForm: React.FC = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [address, setAddress] = useState("");
    const [phone, setPhone] = useState("");
    const router= useRouter();

    useEffect(() => {
        console.log("Datos del formulario:", { name, email, username, password, address, phone });
    }, [name, email, username, password, address, phone]);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        await axios.post("http://localhost:5000/users/register", {name, email, username, password, address, phone})
        .then(response=>response.data)
        .then(data=>{
            alert("usuario registrado exitosamente");
            router.push("/login")
        })
       .catch((error) => 
         alert("Ocurrió un error al ingresar. el usuario o la contraseña son incorrectos")
       );
    };

    return (
        <div className="bg-primaryColor flex flex-row items-center justify-center">
            <form className="my-24 " onSubmit={handleSubmit}>
                <div className="flex flex-col gap-4  justify-center items-center text-center border-2 border-secondaryColor">
                    <div className="font-bold text-lg">
                        <h2 className="text-secondaryColor">Regístrate en Tecnoshop</h2>
                    </div>
                    <div className="flex flex-col">
                        <label className="text-secondaryColor" htmlFor="name">Nombre:</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            placeholder="Luca Di Fulvio"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="text-secondaryColor bg-blue-100 border-2 border-secondaryColor"
                        />
                    </div>
                    <div className="flex flex-col">
                        <label className="text-secondaryColor" htmlFor="email">Correo electrónico:</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="email@example.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="text-secondaryColor bg-blue-100 border-2 border-secondaryColor"
                        />
                    </div>
                    <div>
                        <label className="text-secondaryColor flex flex-col" htmlFor="username">Nombre de usuario:</label>
                        <input
                            type="text"
                            id="username"
                            name="username"
                            placeholder="username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            className="text-secondaryColor bg-blue-100 border-2 border-secondaryColor"
                        />
                    </div>
                    <div>
                        <label className="text-secondaryColor flex flex-col" htmlFor="password">Contraseña:</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            placeholder="********"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="text-secondaryColor bg-blue-100 border-2 border-secondaryColor"
                        />
                    </div>
                    <div>
                        <label className="text-secondaryColor flex flex-col" htmlFor="address">Dirección:</label>
                        <input
                            type="text"
                            id="address"
                            name="address"
                            placeholder="Dirección"
                            value={address}
                            onChange={(e) => setAddress(e.target.value)}
                            className="text-secondaryColor bg-blue-100 border-2 border-secondaryColor"
                        />
                    </div>
                    <div>
                        <label className="text-secondaryColor flex flex-col" htmlFor="phone">Teléfono:</label>
                        <input
                            type="text"
                            id="phone"
                            name="phone"
                            placeholder="Teléfono"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            className="text-secondaryColor bg-blue-100 border-2 border-secondaryColor"
                        />
                    </div>
                    <div>
                        <button
                            type="submit"
                            className="bg-secondaryColor hover:bg-tertiaryColor text-white text-sm font-semibold py-2 px-4 rounded-lg cursor-pointer transition-colors"
                        >
                            Registrarse
                        </button>
                    </div>
                    <div>
                        <Link href="/login" className="text-secondaryColor">¿Ya tienes una cuenta? Inicia sesión</Link>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default RegisterForm;
