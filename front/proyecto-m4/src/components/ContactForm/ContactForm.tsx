"use client";
import { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    address: "",
    email: "",
    description: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Formulario enviado:", formData);
  };

  return (
    <div className="bg-primaryColor flex flex-row items-center justify-center">
      <form className="my-24" onSubmit={handleSubmit}>
        <div className="flex flex-col gap-4 justify-center items-center text-center border-2 border-secondaryColor p-8">
          <div className="font-bold text-lg">
            <h2 className="text-secondaryColor">Contáctanos</h2>
          </div>
          <div className="flex flex-col">
            <label className="text-secondaryColor" htmlFor="firstName">Nombre:</label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              placeholder="Nombre"
              value={formData.firstName}
              onChange={handleChange}
              className="text-secondaryColor bg-blue-100 border-2 border-secondaryColor"
            />
          </div>
          <div className="flex flex-col">
            <label className="text-secondaryColor" htmlFor="lastName">Apellido:</label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              placeholder="Apellido"
              value={formData.lastName}
              onChange={handleChange}
              className="text-secondaryColor bg-blue-100 border-2 border-secondaryColor"
            />
          </div>
          <div className="flex flex-col">
            <label className="text-secondaryColor" htmlFor="address">Dirección:</label>
            <input
              type="text"
              id="address"
              name="address"
              placeholder="Dirección"
              value={formData.address}
              onChange={handleChange}
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
              value={formData.email}
              onChange={handleChange}
              className="text-secondaryColor bg-blue-100 border-2 border-secondaryColor"
            />
          </div>
          <div className="flex flex-col">
            <label className="text-secondaryColor" htmlFor="description">Descripción:</label>
            <input
              type="text"
              id="description"
              name="description"
              placeholder="Descripción"
              value={formData.description}
              onChange={handleChange}
              className="text-secondaryColor bg-blue-100 border-2 border-secondaryColor"
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
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
