import "/src/StyleSheets/ProductTile.css";

export default function ProductTile({product}) {
    const name = product.prodName;
    const descriptionArray = product.prodDesc.split(" ")
    const description = (descriptionArray.length > 20) ? descriptionArray.slice(0, 20).join(" ").concat("...") : descriptionArray.join(" ")
    const price = (product.prodPrice.toString().includes(".")) ? "$".concat(product.prodPrice.toString()) : "$".concat(product.prodPrice.toString().concat(".00"));



    return (
        <div className="productTile">
            <h4 className="productName">{name}</h4>
            <h5 className="productDesc">{description}</h5>
            <h5 className="productPrice">{price}</h5>
        </div>
    )
}