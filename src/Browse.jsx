import useCategories from "./Hooks/Categories.jsx"
import useProducts from "./Hooks/Products.jsx";
import ProductTile from "./Components/ProductTile.jsx";

import "/src/StyleSheets/ProductList.css";

export default function Browse() {

    return (
        <>
            <CategoryChecklist />
            <ProductList />
        </>
    )
}

function ProductList() {
    const products = useProducts();


    return (
        <div className="productList">
            {products.map(prod => (<ProductTile key={prod.id} product={prod} />))}
        </div>
    )
}

function CategoryChecklist() {
    const categories = useCategories();

    return (
        <form onSubmit={handleSubmit} id="categoryForm">
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

function handleSubmit() {
    
}