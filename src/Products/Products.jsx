import React from "react";
import "./Products.css";
import ToggleButton from "../HeartComponent/ToggleButton";
import ToggleOn from "../HeartComponent/ToggleOn";
import ToggleOff from "../HeartComponent/ToggleOff";
import { useSearchParams } from "react-router-dom";


import Filter from "../ProductPageNav/Filter"

export default function Products({ gender }) {
  const [searchParams] = useSearchParams();

  const brand = searchParams.get("brand");
  const color = searchParams.get("color");
  const size = searchParams.get("size")
  const category =searchParams.get("category")
  const min = searchParams.get("min")
  const max = searchParams.get("max")


  const [products, setProducts] = React.useState([]);

  React.useEffect(() => {
    fetch("/api/products")
      .then((res) => res.json())
      .then((res) => {
        setProducts(res.products);
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
      {displayedProducts.length===0 &&
      <h4 className="not-available">No products are available!</h4>
      }
      {displayedProducts.map((product) => (
        <div className="product" key={product.id}>
          
          <div className="toggle-heart">
            <ToggleButton id={product.id}>
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

        </div>
      ))}
    </section>
  );
}