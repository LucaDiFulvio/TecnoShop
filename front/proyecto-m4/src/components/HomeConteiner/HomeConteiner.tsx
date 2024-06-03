import Image from "next/image";

function HomeConteiner() {
  return (
    <div className="bg-primaryColor p-8">
      <div className="grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-4 justify-center">
        <div className="border-2 border-secondaryColor flex flex-col justify-center items-center">
          <h2 className="text-secondaryColor">
            Nos preocupamos por el medio ambiente, trae tu telefono viejo y te
            damos un descuento en tu compra.
          </h2>
          <div>
            <Image
              src="https://images.pexels.com/photos/3850587/pexels-photo-3850587.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="celu"
              height={300}
              width={300}
              className="w-40 h-40 object-cover rounded-full transition-all justify-center"
            />
          </div>
        </div>

        <div className="border-2 border-secondaryColor flex flex-col justify-center items-center">
          <h2 className="text-secondaryColor">
            Compras en cuotas sin interes con tarjeta de Crédito MasterCard,
            Visa y American Express.
          </h2>
          <div>
            <Image
              src="https://images.pexels.com/photos/164501/pexels-photo-164501.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="TarjetaDeCrédito"
              height={300}
              width={300}
              className="w-40 h-40 object-cover rounded-full transition-all"
            />
          </div>
        </div>

        <div className="border-2 border-secondaryColor flex flex-col justify-center items-center">
          <h2 className="text-secondaryColor">
            Aceptamos pagos con Bitcoin, Ethereum y Litecoin.
          </h2>
          <div>
            <Image
              src="https://images.pexels.com/photos/844124/pexels-photo-844124.jpeg?auto=compress&cs=tinysrgb&w=300"
              alt="cripto"
              height={300}
              width={300}
              className="w-40 h-40 object-cover rounded-full transition-all"
            />
          </div>
        </div>

        <div className="border-2 border-secondaryColor flex flex-col justify-center items-center">
          <h2 className="text-secondaryColor">
            Vendemos tecnologías usadas en optimas condiciones con garantía de
            6 meses posteriores a la compra.
          </h2>
          <div>
            <Image
              src="https://images.pexels.com/photos/2582931/pexels-photo-2582931.jpeg?auto=compress&cs=tinysrgb&w=300"
              alt="reparacion"
              height={300}
              width={300}
              className="w-40 h-40 object-cover rounded-full transition-all"
            />
          </div>
        </div>

        <div className="border-2 border-secondaryColor flex flex-col justify-center items-center">
          <h2 className="text-secondaryColor">
            Contamos con la atención personalizada de nuestros vendedores,
            para que puedas elegir el producto que mejor se adapte a tus
            necesidades.
          </h2>
          <div>
            <Image
              src="https://images.pexels.com/photos/8866790/pexels-photo-8866790.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="service"
              height={300}
              width={300}
              className="w-40 h-40 object-cover rounded-full transition-all"
            />
          </div>
        </div>

        <div className="border-2 border-secondaryColor flex flex-col justify-center items-center">
          <h2 className="text-secondaryColor">
            Envío gratis a todo el país en compras mayores a $5000.
          </h2>
          <div>
            <Image
              src="https://media.istockphoto.com/id/1218449770/es/foto/obtenci%C3%B3n-de-paquete-s-desde-el-concepto-de-oficina-de-correos-perfil-lateral-foto-de-cerca-de.jpg?b=1&s=612x612&w=0&k=20&c=t5Pb9iyTjPUWssEoYZCatrN1HxEQpy8dxDp-tlJ-yaQ="
              alt="celu"
              height={300}
              width={300}
              className="w-40 h-40 object-cover rounded-full transition-all"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeConteiner;
