import { useEffect, useState } from "react";
import axios from "axios";
import { base_url } from "../utils/constant"

const useDataFetch = () =>{
    const [products, setProducts] = useState([]);


    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const response = await axios.get(base_url);
            console.log(response.data.products);
            setProducts(response.data.products);
           
        }
        catch (error) {
            console.log(error);
        }
    }






    return products
}

export default useDataFetch;