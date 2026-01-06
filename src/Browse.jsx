import useCategories from "./Hooks/Categories.jsx"
import useProducts from "./Hooks/Products.jsx";

export default function Browse() {

    return (
        <div>
            <CategoryChecklist />
            <ProductList />
        </div>
    )
}

function ProductList() {
    const products = useProducts();


    return (
        products.map(prod => <li key={prod.id}>{prod.prodName}</li>)
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

function handleSubmit() {
    
}