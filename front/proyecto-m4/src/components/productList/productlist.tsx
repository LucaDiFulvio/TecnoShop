const ProductList: React.FC = () => {
  return (
    <nav className="bg-tertiaryColor p-2">
      <ul className="flex justify-center gap-4 text-white">
        <li className="hover:cursor-pointer">Smartphones</li>
        <li className="hover:cursor-pointer">Laptops</li>
        <li className="hover:cursor-pointer">Tablets</li>
        <li className="hover:cursor-pointer">Auriculares</li>
        <li className="hover:cursor-pointer">Cámaras</li>
        <li className="hover:cursor-pointer">Monitores</li>
        <li className="hover:cursor-pointer">Accesorios</li>
      </ul>
    </nav>
  );
}

export default ProductList;
