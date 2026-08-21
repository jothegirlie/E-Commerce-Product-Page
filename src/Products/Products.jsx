import React from "react";
import "./Products.css";
import ToggleButton from "../HeartComponent/ToggleButton";
import ToggleOn from "../HeartComponent/ToggleOn";
import ToggleOff from "../HeartComponent/ToggleOff";
import { Link,useSearchParams } from "react-router-dom";

import { heartContext } from "../HeartComponent/Heart";


import Filter from "../ProductPageNav/Filter"

export default function Products({ gender }) {
  const [searchParams] = useSearchParams();

  const brand = searchParams.get("brand");
  const color = searchParams.get("color");
  const size = searchParams.get("size")
  const category =searchParams.get("category")
  const min = searchParams.get("min")
  const max = searchParams.get("max")

  const dbgender = gender === "male" ? "men" : "women"

  const {setFavorites} = React.useContext(heartContext)
  const {favorites} = React.useContext(heartContext)




  const [products, setProducts] = React.useState([]);
  const [loading, setLoading] = React.useState(false);

  React.useEffect(() => {
    fetch("http://localhost:5000/api/products")
      .then((res) => res.json())
      .then((res) => {
        setLoading(true);
        setProducts(res);
      });
  }, []);

  const displayedProducts = products.filter((product) => {
    if (product.gender !== gender) {
      return false;
    }

    if (brand && product.brand !== brand) {
      return false;
    }
    if(color && product.color!=color){
      return false;
    }
    if(size && !product.sizes.includes(Number(size))){
      return false;
    }
    if(category && product.type!== category){
      return false;
    }
    if(min && product.price < Number(min)){
      return false;
    }
    if(max && product.price > Number(max)){
      return false;
    }

    return true;
  });

  return (
    <section className="section-with-products">
      <section className="active-filter">
        {brand && <Filter name={"Brand"} value={brand}/>}
        {color && <Filter name={"Color"} value={color} />}
        {size && <Filter name={"Size"} value={size} />}
        {category && <Filter name={"Category"} value={category} />}
        {max && <Filter name={"Maximum price"} value={max} />}
        {min && <Filter name={"Minimum price"} value={min} />}

      </section>
      {!loading && 
      <div role="status" aria-live="polite" class="flex items-center justify-center space-x-2">
        <div class="h-8 w-8 animate-spin rounded-full border-4 border-solid
         border-orange-500 border-t-transparent motion-safe:animate-spin motion-reduce:hidden">
        </div>
        <span class="sr-only">Loading...</span>
        <p class="text-orange-600 motion-reduce:hidden dark:text-slate-300">Loading...</p>
        <p class="hidden text-slate-600 motion-reduce:block dark:text-slate-300">
    Please wait, content is loading.
  </p>
</div>}
      {loading && displayedProducts.length===0 &&
      <h4 className="not-available">No products are available!</h4>
      }
      {displayedProducts.map((product) => (

        
          <Link to={`/${dbgender}/${product.id}`} className="product" key={product.id} >
          <div className="toggle-heart" onClick={(e) =>
            {e.stopPropagation()
            e.preventDefault()}
          }>
            <ToggleButton onClick={()=> {
              favorites.some(favorites => favorites.id === product.id) ? 
              setFavorites(favorites.filter((fav)=> fav.id!= product.id )) :
              setFavorites(prev => [...prev, product])
              console.log(favorites)
            }}
            >
              <ToggleOn id={product.id}>
                <i className="fa-solid fa-heart"></i>
              </ToggleOn>

              <ToggleOff id={product.id}>
                <i className="fa-regular fa-heart"></i>
              </ToggleOff>
            </ToggleButton>
        
          </div>

          <img src={product.image} alt="" />
          <div className="product-info">
            <div className="info-prd">
              <h4>{product.name}</h4>
              <p>{product.company}</p>
            </div>
            <h4>{`${product.price}$`}</h4>
          </div>
            </Link>

          
  
      ))}
    </section>
  );
}