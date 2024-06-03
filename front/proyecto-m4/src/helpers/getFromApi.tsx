import axios from "axios";

const api = "http://localhost:5000/products"

export const getFromApi = async () => {
    try{  const response = await axios.get(api)
    return response.data}
    catch(error){
        console.log("Error al obtener los datos:", error)
    }
}