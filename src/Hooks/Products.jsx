import {useEffect, useState} from "react";
import axios from "axios";

export default function useProducts(categories) {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        async function load() {

            const res = await axios.get("http://localhost:8080/products", {
                params: {
                    cat: categories
                }
            })
            setProducts(res.data);
        }
        load();
    }, [categories])

    return products;
}