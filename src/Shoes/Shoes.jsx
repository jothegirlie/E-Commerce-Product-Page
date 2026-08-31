import React from "react";

import { useParams } from "react-router-dom";
import "./Shoes.css"

import { Link } from "react-router-dom";
import ShoesNav from "./ShoesNav";
import { cartContext } from "../CartComponent/Cart"
import SizeGuide from "./SizeGuide";

export default function Shoes() {

  const { setCartItems } = React.useContext(cartContext)

  const { id } = useParams();
  const [shoe, setShoe] = React.useState({
    sizes: []
  })
  const [activeSize, setActiveSize] = React.useState(null)
  const [shoeSizeWarning, setSizeWarning] = React.useState(false)
  const [sizeGuide, setSizeGuide] = React.useState(false)


  React.useEffect(() => {
    fetch(`http://localhost:5000/api/products`)
      .then((res) => res.json())
      .then((res) => {
        res.map((product) => {
          if (product.id === Number(id)) {
            setShoe(product)
          }
        })
      })
  }, [id])


  // useParams gets the dynamic value from the URL. :id (not query values!)

  return (
    <section className="shoe-section"> 
      <div className="bg-white w-full min-h-screen">
        <nav aria-label="Breadcrumb">
          <ol role="list" className="flex max-w-2xl items-center space-x-2 px-4 
          sm:px-6 lg:max-w-7xl lg:px-8">
            <li>
              <div className="flex items-center">
                <Link to="../">Home</Link>
                <svg viewBox="0 0 16 20" width="16" height="20" fill="currentColor"
                  aria-hidden="true" className="h-5 w-4 text-gray-300">
                  <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
                </svg>
              </div>
            </li>
            <li>
              <div className="flex items-center">
                <Link to="../men">Men</Link>
                <svg viewBox="0 0 16 20" width="16" height="20" fill="currentColor"
                  aria-hidden="true" className="h-5 w-4 text-gray-300">
                  <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
                </svg>
              </div>
            </li>
            <li className="text-sm">
              <p className="font-medium text-gray-500 hover:text-gray-600">
                {shoe.name}</p>
            </li>
          </ol>
        </nav>
        <div className="w-full max-w-none px-4 pt-1 pb-1 sm:px-6 lg:grid 
          lg:grid-cols-12 lg:gap-x-8 lg:px-8 
            lg:pt-16 lg:pb-24">
          <div className="lg:col-span-7 lg:border-r lg:border-gray-200 lg:pr-8">
            <h1 className="text-1xl font-extrabold tracking-tight text-black sm:text-3xl">{shoe.name}</h1>
            <img src={shoe.image} alt="" className="mt-6 h-[450px] w-[800px] rounded-lg object-cover" />
            <p className="mt-4 text-sm text-gray-600">{shoe.description}</p>
          </div>
          <div className="mt-4 lg:col-span-5 lg:mt-0 flex items-flex-start justify-flex-start
            flex-col gap-3">
            <h2 className="text-3xl text-black">Product information</h2>
            <p className="text-2xl tracking-tight text-gray-700">{shoe.price}$</p>
            <div className="mt-10">
              <div>
                <div className="flex items-center justify-between">
                  <h3 className="text-sm font-medium text-black">Size</h3>
                  <p onClick={()=> setSizeGuide(true)}
                  className="text-sm font-medium text-orange-500 underline cursor-pointer hover:text-black"
                  >Size Guide</p>
                  <SizeGuide isOpen={sizeGuide} onClose={()=> setSizeGuide(false)}/>
                </div>
                <fieldset aria-label="Choose a size" className="mt-4">
                  <div className="grid grid-cols-4 gap-3 pb-5">
                    {shoe.sizes.map((size) => (
                      <button className={activeSize === size ? "text-sm font-medium text-gray-900 rounded-md \
                        border border-gray-300 activeSize" : "text-sm \
                        font-medium text-gray-900 rounded-md border border-gray-300"}
                        onClick={() => setActiveSize(size)}>{size}</button>
                    ))}
                  </div>
                </fieldset>
              </div>
              <button type="submit"
                className="mt-10 flex w-full items-center justify-center rounded-md
           border border-transparent px-8 py-3 text-base font-medium
            text-black hover:bg-white focus:ring-2 focus:ring-indigo-500 
            focus:ring-offset-2 focus:outline-hidden"
                onClick={() => {if(activeSize === null){
                  setSizeWarning(true)}else{
                  {setSizeWarning(false)
                  setCartItems(prev => [...prev, {...shoe , size: activeSize, quantity:1}])}}}}
              >Add to cart</button>
              {shoeSizeWarning && activeSize === null &&
                <p className="text-red-500 mt-3">Please select a size!</p>}
            </div>
            <ShoesNav shoe={shoe} />
          </div>
        </div>  
      </div>
    </section>
  )
}