import axios from "axios";
import {useEffect, useState} from "react";

export default function Browse() {

    return (
        <div>
            <CategoryChecklist />
        </div>
    )
}

function CategoryChecklist() {
    const categories = useCategories();

    return (
        <form onSubmit={handleSubmit}>
            {categories.map(cat => {
                const category = cat.category;

                // Categories are originally all caps so we convert it to a more UI friendly version
                const categoryLabel = category.charAt(0) + category.substring(1, category.length).toLowerCase();


                return (
                    <li key={category}>
                        <label>
                            {categoryLabel}
                            <input id={category} name={category} type="checkbox"/>
                        </label>
                    </li>
                )
            })}

            <button type="submit">Filter by Selected</button>
        </form>
    )

}

function useCategories() {
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

function handleSubmit() {
    
}