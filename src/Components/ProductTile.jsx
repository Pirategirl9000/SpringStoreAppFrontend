export default function ProductTile({product}) {
    const name = product.prodName;
    const descriptionArray = product.prodDesc.split(" ")
    const description = (descriptionArray.length > 20) ? descriptionArray.slice(0, 20).join(" ").concat("...") : descriptionArray.join(" ")
    const price = (product.prodPrice.toString().includes(".")) ? "$".concat(product.prodPrice.toString()) : "$".concat(product.prodPrice.toString().concat(".00"));



    return (
        <div className="productTile">
            <h4>{name}</h4>
            <h6>{description}</h6>
            <h6>{price}</h6>


        </div>
    )
}