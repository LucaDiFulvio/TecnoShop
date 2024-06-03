"use client"
import React, { useState, useEffect } from "react";

const SearchBar: React.FC = () => {
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    console.log("Valor del input:", inputValue);
  }, [inputValue]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handleButtonClick = () => {
    console.log("Botón de búsqueda clicado");
  };

  return (
    <div className="flex items-center justify-center">
      <input 
        type="text" 
        className="bg-white pl-2 pr-4 text-base font-semibold outline-0 text-secondaryColor w-full"
        style={{ height: "2.25rem" }}
        placeholder="ingresar producto"
        value={inputValue} 
        onChange={handleChange} 
      />
      <button 
        className="bg-tertiaryColor p-2 text-white font-semibold hover:bg-blue-800 transition-colors"
        style={{ height: "2.25rem" }}
        onClick={handleButtonClick} 
      >
        Buscar
      </button>
    </div>
  );
}

export default SearchBar;
