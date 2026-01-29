import Layout from "./Layout";
import FilterGroup from "../components/FilterGroup/FilterGroup.jsx";
import ProductListing from "../components/ProductListing/ProductListing.jsx";
const produtosFake = [
    { name: "Tênis Nike", image: "https://raw.githubusercontent.com/digitalcollegebr/projeto-digital-store/main/public/product-thumb-1.jpeg", price: 200, priceDiscount: 149.9 },
    { name: "Tênis Adidas", image: "https://raw.githubusercontent.com/digitalcollegebr/projeto-digital-store/main/public/product-thumb-2.jpeg", price: 200, priceDiscount: 149.9 },
    { name: "Sapato Puma", image: "https://raw.githubusercontent.com/digitalcollegebr/projeto-digital-store/main/public/product-thumb-3.jpeg", price: 400 },
    { name: "Tênis Fila", image: "https://raw.githubusercontent.com/digitalcollegebr/projeto-digital-store/main/public/product-thumb-4.jpeg", price: 200, priceDiscount: 149.9 },
    { name: "Tênis Vans", image: "https://raw.githubusercontent.com/digitalcollegebr/projeto-digital-store/main/public/product-thumb-5.jpeg", price: 200, priceDiscount: 149.9 },
  ];

const ProductListingPage = () => {
    return (
    <Layout> 
        <FilterGroup

            title = "Marca"

            inputType = "checkbox"

            options = {[{ text: "Nike", value: "nike" }, { text: "Adidas", value: "adidas" } , { text: "Puma", value: "puma" }]}

        />
        <ProductListing products={produtosFake}/>
    </Layout> 
    )
}
export default ProductListingPage;