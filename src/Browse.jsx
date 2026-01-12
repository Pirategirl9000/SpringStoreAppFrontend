import useCategories from "./Hooks/Categories.jsx"
import useProducts from "./Hooks/Products.jsx";
import ProductTile from "./Components/ProductTile.jsx";

import "/src/StyleSheets/ProductList.css";
import "/src/StyleSheets/CategoryForm.css";

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
            <div id="categoriesCheckboxes">
                {categories.map(cat => {
                    const category = cat.category;

                    // Categories are originally all caps so we convert it to a more UI friendly version
                    const categoryLabel = category.charAt(0) + category.substring(1, category.length).toLowerCase();


                    return (
                        <label key={category} className="categoryLabel">
                            {categoryLabel}
                            <input id={category} name={category} type="checkbox" className="categoryInput"/>
                        </label>
                    )
                })}
            </div>

            <button type="submit" id="submitButton">Filter by Selected</button>
        </form>
    )
}

function handleSubmit() {
    
}