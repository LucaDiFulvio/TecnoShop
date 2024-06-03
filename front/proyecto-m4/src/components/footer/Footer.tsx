import Image from "next/image";
import Link from "next/link";
function Footer () {
  return (
    <footer className="py-4 text-white bg-gray-900 bottom-0 ">
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          <p className="m-4 duration-300 cursor-pointer hover:text-customColorPrimary " >© 2024 TecnoShop. Todos los derechos reservados.</p>


        
        <div  className="flex items-center hover:cursor-pointer">
          <Image
            width={50}
            height={50}
            src="https://img.icons8.com/nolan/64/1A6DFF/C822FF/facebook-messenger.png"
            alt="facebook-messenger"
          />
          <Image
            width={50}
            height={50}
            src="https://img.icons8.com/nolan/64/1A6DFF/C822FF/whatsapp.png"
            alt="whatsapp"
          />

          <Image
            width={50}
            height={50}
            src="https://img.icons8.com/nolan/64/apple-app-store--v2.png"
            alt="apple-app-store--v2"
          />
          <Image
            width={50}
            height={50}
            src="https://img.icons8.com/nolan/64/1A6DFF/C822FF/google-play.png"
            alt="google-play"
          />
        </div>
        <Link href="https://github.com/LucaDiFulvio">
          <p className="m-4 duration-300 cursor-pointer text-white hover:underline">
              Diseñado por Luca Di Fulvio
          </p>
        </Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
