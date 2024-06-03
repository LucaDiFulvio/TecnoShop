"use client";
import { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import useAuth from "@/context/AuthContext";

interface IOrder {
    id: number;
    products: { id: number; name: string }[]; 
}

export const Orders = () => {
    const auth = useAuth();
    const { token } = auth || {};
    const [orders, setOrders] = useState<IOrder[]>([]);

    useEffect(() => {
        axios
            .get("http://localhost:5000/users/orders", { headers: { authorization: token } })
            .then((response) => {
                setOrders(response.data);
            })
            .catch((error) => {
                console.log("Error al obtener los pedidos");
            });
    }, [token]);

    return (
        <>
            <p className="items-center text-center text-3xl mt-7">Historial de compras</p>
            {orders.length === 0 ? (
                <p className="content-center mb-96 items-center text-center text-xl mt-7">todavia no has realizado ninguna compra</p>
            ) : (
                <div className="flex justify-center flex-wrap my-8 mx-4">
                    {orders.map((order) => (
                        <div className="border-2 m-4 border-secondaryColor flex flex-col justify-center items-center justify-evenly h-96 w-72 hover:scale-105 transition-all hover:cursor-pointer hover:shadow-lg hover:shadow-black" key={order.id}>
                            <p className="font-bold text-lg">PRODUCTOS</p>
                            <p>Numero de compra: {order.id}</p>
                            {order.products.map((product) => (
                                <div key={product.id}>
                                    <p>PRODUCTO: {product.name}</p>
                                </div>
                            ))}
                        </div>
                    ))}
                </div>
            )}
        </>
    );
};

export default Orders;
