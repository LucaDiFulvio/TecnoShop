"use client"
import { useEffect, useState } from "react";
import { getFromApi } from "@/helpers/getFromApi";
import Link from "next/link";
import  Image from "next/image";
import { Product } from "./types";




export default function Store() {
 const [products, setProducts] = useState([]);

 useEffect(() => {
  const fetchData = async () => {
    try {
      const allProducts = await getFromApi();
      setProducts(allProducts);
      localStorage.setItem("products", JSON.stringify(allProducts));
    } catch (error) {
      console.log("Error al obtener los productos:", error);
    }
  };

  fetchData();
}, []);

console.log("Productos del backend:", products);

return (
  <>
    <h1 className="text-3xl font-bold text-center text-secondaryColor m-4">Productos disponibles en TecnoShop</h1>
    <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4 justify-center bg-primaryColor p-8   ">
      {products.map((product: Product) => (
          <div className="border-2 border-secondaryColor flex flex-col justify-center items-center h-96 w-72 hover:scale-105 transition-all hover:cursor-pointer hover:shadow-lg  hover:shadow-black " key={product.id}>
              <Image src={"https://res.cloudinary.com/dzxrc9b6o/image/upload/v1712502515/Next/iphone11_ibxhb2.png"} alt={product.name} width={200} height={200} />
              <h2 className="text-secondaryColor">{product.name}</h2>
              <p className="text-2xl text-secondaryColor">{product.price}</p>
             <Link href={`/store/${product.id}`}>
               <button className="bg-secondaryColor hover:bg-tertiaryColor text-white text-sm font-semibold py-2 px-4 rounded-lg cursor-pointer transition-colors m-4">
                Ver más
                </button>
              </Link>
        </div>
      ))}
    </div>
  </>
);
}