"use client"
import { useEffect, useState } from "react";
import  Image from "next/image";
import Link from "next/link";
import axios from "axios";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
const CheckOut: React.FC = () => {
    const [products, setProducts] = useState<any[]>([]);
    const token=Cookies.get("token")
    const router = useRouter();


    useEffect(() => {
        const productsString = sessionStorage.getItem("products");
        if (productsString) {
            const parsedProducts = JSON.parse(productsString);
            console.log("Productos en el sessionStorage:", parsedProducts);
            setProducts(parsedProducts);
        } else {
            console.log("No hay productos en el sessionStorage");
        }
    }, []);
   
     const prodctsToBuy = products.map((product)=>{
        return product.id
     })

     const handleCheckout = async () => {
        try {
          const response = await axios.post("http://localhost:5000/orders", 
            {products: prodctsToBuy},
            {headers:{
                Authorization: token
            }
        });
          console.log(response.data);
          alert("compra exitosa");
          router.push("/orders");
        } catch (error) {
          alert("hubo un error en la compra");
        }
     }

    return (
        <>
        {products.length===0 ? 
            <div className="flex flex-col justify-center  items-center gap-96">
                <p className="text-secondaryColor content-center items-center text-center text-xl mt-7">todavia no has agregado ningun producto</p>
                <Link href="/store">
                    <button className="bg-secondaryColor hover:bg-tertiaryColor text-white text-sm font-semibold py-2 px-4 rounded-lg   cursor-pointer transition-colors m-4  ">ir a la tienda
                    </button>
                </Link>
            
            </div>
 
        :
        <div className="mb-32">
            <h1 className="text-3xl font-bold text-center text-secondaryColor m-4">ya casi finalizas tu compra!!</h1>
            <div className="flex justify-center justify-center bg-primaryColor p-4  gap-8">
                {products.map((product) => (
                <div className="border-2 border-secondaryColor flex flex-col justify-center items-center h-96 w-72 hover:scale-105 transition-all hover:cursor-pointer hover:shadow-lg  hover:shadow-black " key={product.id}>
                    <Image src={"https://res.cloudinary.com/dzxrc9b6o/image/upload/v1712502515/Next/iphone11_ibxhb2.png"} alt={product.name} width={200} height={200} />
                    <h2 className="text-secondaryColor text-2xl">{product.name}</h2>
                    <p className="text-2xl text-secondaryColor">{product.price}</p>
                </div>))}
            </div>
            <h1 className="text-xl font-bold text-center text-secondaryColor m-4">Total: ${products.reduce((total, product) => total + product.price, 0)}</h1>
            <div className="flex justify-center">
                <button className="bg-secondaryColor hover:bg-tertiaryColor text-white text-sm font-semibold py-2 px-4 rounded-lg cursor-pointer transition-colors m-4 " onClick={handleCheckout}>Finalizar compra</button>
            </div>
            
  
        </div>}
        </>
    );
}

export default CheckOut;
