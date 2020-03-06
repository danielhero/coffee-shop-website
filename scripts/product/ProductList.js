import { useProducts } from "./productDataProvider.js";
import { Product } from "./Product.js";

const contentTarget = document.querySelector(".currentProducts")

export const ProductList = () => {
    const ProductArray = useProducts()


for (const ProductObject of ProductArray) {
        const ProductString = Product(ProductObject)
        
        contentTarget.innerHTML += ProductString
    }
}
