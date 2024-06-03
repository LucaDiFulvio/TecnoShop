"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
}

interface CategoryProps {
  params: { category: string };
}

const Category: React.FC<CategoryProps> = (props) => {
  const { category } = props.params;
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [productNotFound, setProductNotFound] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const products: Product[] = JSON.parse(localStorage.getItem("products") || "[]");

    const foundProduct = products.find((product) => product.id === parseInt(category));

    if (foundProduct) {
      setProduct(foundProduct);
      setLoading(false);
    } else {
      setProductNotFound(true);
      setLoading(false);
    }
  }, [category]);

  const handleAddToCart = () => {
    if (product) {
      const { id } = product;
      const serializedProduct = JSON.stringify(product);
      let existingProducts: Product[] = JSON.parse(sessionStorage.getItem("products") || "[]");
      const existingProductIds = existingProducts.map((prod) => prod.id);

      if (existingProductIds.includes(id)) {
        alert("¡Este producto ya ha sido agregado al carrito!");
        router.push("/store");
        return;
      }

      existingProducts.push(product);
      sessionStorage.setItem("products", JSON.stringify(existingProducts));

      alert("Producto agregado al carrito");
      router.push("/store");
    }
  };

  return (
    <>
      {loading ? (
        <div>Cargando...</div>
      ) : product ? (
        <div className="flex flex-row flex-nowrap content-center mb-20 items-center justify-center text-center">
          <div className="m-4 border-2 border-secondaryColor rounded-3xl shadow-xl hover:scale-105 transition-all cursor-pointer shadow-secondaryColor p-8">
            <Image src={"https://res.cloudinary.com/dzxrc9b6o/image/upload/v1712502515/Next/iphone11_ibxhb2.png"} alt={product.name} height={300} width={300} />
          </div>
          <div className="p-4 w-96 text-scondaryColor te">
            <p className="text-2xl">{product.name}</p>
            <p>Detalles del Producto:</p>
            <p>{product.description}</p>
            <p className="text-xl">Precio: {product.price}</p>
            <button className="bg-secondaryColor text-primaryColor p-4 hover:bg-tertiaryColor hover:scale-105 transition-all rounded-lg" onClick={handleAddToCart}>Agregar al carrito</button>
          </div>
        </div>
      ) : productNotFound ? (
        <div>
          <h1>No se encontró el producto</h1>
        </div>
      ) : null}
    </>
  );
};

export default Category;
