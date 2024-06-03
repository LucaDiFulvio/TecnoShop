"use client";
import  { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import axios from "axios";
import Cookies from "js-cookie";
import { useAuth } from "@/context/AuthContext";
const LoginForm: React.FC = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const router= useRouter();
    const auth= useAuth();
    const {login} = auth || {};

    useEffect(() => {
        console.log("Email:", email);
        console.log("Password:", password);
    }, [email, password]);

    const handleSubmit = async(e: React.FormEvent) => {
        e.preventDefault();
        await axios.post("http://localhost:5000/users/login", { email, password })
        .then(response=>response.data)
        .then(data=>{
            if(login){
            login(data.token,data.user);
            alert("usuario logeado exitosamente");
            router.push("/")
        }})
       .catch((error) => 
         alert("Ocurrió un error al ingresar. el usuario o la contraseña son incorrectos")
       );

        
    };

    return (
        <div className="bg-primaryColor items-center flex-norap content-center justify-center my-24  flex flex-row">
            <form  onSubmit={handleSubmit}>
                <div className=" text-center border-2 border-secondaryColor flex flex-col gap-4 p-8">
                    <div>
                        <h2 className="text-secondaryColor text-bold text-lg">Ingresa a tu cuenta en Tecnoshop</h2>
                    </div>
                    <div className="flex flex-col">
                        <label className="text-secondaryColor" htmlFor="email">Ingrese su Email:</label>
                        <input
                            type="text"
                            id="email"
                            name="email"
                            placeholder="email@example.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="text-secondaryColor border-2 border-secondaryColor" 
                        />
                    </div>
                    <div className="flex flex-col">
                        <label className="text-secondaryColor" htmlFor="password">Ingrese su Password:</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            placeholder="********"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="text-secondaryColor border-2 border-secondaryColor" 
                        />
                    </div>
                    <div>
                        <button
                            type="submit"
                            className="bg-secondaryColor hover:bg-tertiaryColor text-white text-sm font-semibold py-2 px-4 rounded-lg cursor-pointer transition-colors"
                        >
                            Enviar
                        </button>
                    </div>
                    <div>
                        <Link href="/register" className="text-secondaryColor">¿No tienes cuenta? Regístrate</Link>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default LoginForm;
