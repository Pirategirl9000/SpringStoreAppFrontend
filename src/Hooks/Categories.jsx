import {useEffect, useState} from "react";
import axios from "axios";

export default function useCategories() {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        async function load() {
            const res = await axios.get("http://localhost:8080/products/categories")
            setCategories(res.data);
        }
        load();
    }, []);

    return categories;
}