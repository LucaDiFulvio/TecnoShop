import Link from "next/link";
import { highlightedProductsData } from "@/helpers/highlightedProductsData";
import Image from "next/image";

const HiglightedProductCards: React.FC = () => {
    return (
        <>
            {highlightedProductsData.map((product) => (
                <div className="border-2 border-secondaryColor flex flex-col justify-center items-center h-96 w-72 hover:scale-105 transition-all hover:cursor-pointer hover:shadow-lg  hover:shadow-black " key={product.id}>
                    <Image src={product.image} alt={product.name} width={200} height={200} />
                    <div>
                        <h3 className="text-secondaryColor" >{product.name}</h3>
                        <h4 className="text-2xl text-secondaryColor">{`$ USD ${product.price}`}</h4>
                    </div>
                    <Link href={`/store/${product.id}`} key={product.id}>
                        <button className="bg-secondaryColor hover:bg-tertiaryColor text-white text-sm font-semibold py-2 px-4 rounded-lg cursor-pointer transition-colors m-4">agregar al carrito</button>
                    </Link>
                </div>
            ))}
        </>
    );
};

export default HiglightedProductCards;
