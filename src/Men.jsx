import "./men.css"
import ProductPageNav from "./ProductPageNav/ProductPageNav"
import Products from "./Products/Products"

export default function Men(){

    return(
        
        <main className="gender-main">
        <ProductPageNav categories={["Sneakers", "Slides", "Boots", "Mocassins"]}/>
        <Products gender={"male"}/>
        </main>
      
    )
}