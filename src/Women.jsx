import "./men.css"
import React from "react";
import shoes2 from "./shoes2"

export default function Women({setPage , setSelectedShoe}){

const [openFilter, setOpenFilter] = React.useState(null);
const [selectedFilters, setSelectedFilters] = React.useState({
    brands:[],
    colors:[],
    minPrice:"",
    maxPrice:"",
})

const [selectedType, setSelectedType] = React.useState(null);

const filteredShoes = shoes2.filter(shoe => {
    const brandMatch = selectedFilters.brands.length === 0 || selectedFilters.brands.includes(shoe.brand)
    const colorMatch = selectedFilters.colors.length === 0 || selectedFilters.colors.includes(shoe.color)
    const priceMatch = 
    (selectedFilters.minPrice === "" || shoe.price >= Number(selectedFilters.minPrice)) &&
    (selectedFilters.maxPrice === "" || shoe.price <= Number(selectedFilters.maxPrice))
    const typeMatch = selectedType === null || shoe.type === selectedType
    return brandMatch && colorMatch && priceMatch && typeMatch
    

})


const handleBrand = (e) => {
    const value = e.target.name
    setSelectedFilters(prev => ({
        ...prev,
        brands: e.target.checked 
            ? [...prev.brands, value]     
            : prev.brands.filter(b => b !== value)  
    }))
}

const handlePrice = (e) => {
    setSelectedFilters(prev => ({
        ...prev, [e.target.name]: e.target.value
    }))
}

const handleColor = (e) => {
    const value = e.target.name
    setSelectedFilters(prev => ({...prev,
        colors: e.target.checked ? [...prev.colors, value] : prev.colors.filter(c => c!== value)
    }))
}


    return(
        <main className="men-main">
        <nav class="shoe-nav">
            <h1>Women-Shoes:</h1>
            <div className="shoe-type" onClick={()=> setSelectedType(selectedType==="sneakers" ? null : 
                "sneakers"
            )}>
                <p>Sneakers</p>
            </div>
             <div className="shoe-type" onClick={() => setSelectedType(selectedType==="slides" ? null :
                "slides"
             )}>
                <p>Slides</p>
            </div>
            <div className="shoe-type" onClick={() => setSelectedType(selectedType==="boots"? null:
                "boots"
            )}>
                <p>Boots</p>
            </div>
            <div className="shoe-type" onClick={() => setSelectedType(selectedType==="moccasins" ? null:
                "moccasins"
            )}>
                <p>Moccasins</p>
            </div>
        </nav>

        <section className="shoes">
            <section className="filter-types">
                <div className="filters" onClick={()=>setOpenFilter(openFilter=== "brand"? null : "brand")}>
                    <p>Brand</p>
                    <i class="fa-solid fa-angle-down"></i>
                     {openFilter==="brand" && (
            <section className="brand" onClick={(e) => e.stopPropagation()}>
                <div className="name-checkbox">
                <label htmlFor="nike">Nike</label>
                <input type="checkbox" name="nike" onChange={handleBrand} />
                </div>
                <div className="name-checkbox">
                <label htmlFor="vans">Vans</label>
                <input type="checkbox" name="vans" onChange={handleBrand} />
                </div>
                <div className="name-checkbox">
                <label htmlFor="adidas">Adidas</label>
                <input type="checkbox" name="adidas" onChange={handleBrand} />
                </div>
                <div className="name-checkbox">
                <label htmlFor="converse">Converse</label>
                <input type="checkbox" name="converse" onChange={handleBrand}/>
                </div>
            </section>
        )}
                </div>
                <div className="filters" onClick={()=>setOpenFilter(openFilter==="price" ? null : "price")}>
                    <p>Price</p>
                    <i class="fa-solid fa-angle-down"></i>
                    {openFilter==="price" && (
                        <section className="prices"onClick={(e) => e.stopPropagation()}>
                            <div className="from-price">
                                <p>Price from:</p>
                                <div className="from-price-input">
                                <input type="text" name="minPrice" onChange={handlePrice}  />
                                <p>$</p>
                                </div>
                            </div>
                             <div className="to-price">
                                <p>Price up to:</p>
                                <div className="to-price-input">
                                <input type="text" name="maxPrice" onChange={handlePrice} />
                                <p>$</p>
                                </div>
                            </div>
                        </section>
                    )}
                </div>
                <div className="filters" onClick={()=>setOpenFilter(openFilter==="colour" ? null : "colour")}>
                    <p>Colour</p>
                    <i class="fa-solid fa-angle-down"></i>
                    {openFilter==="colour" && (
                        <section className="colors" onClick={(e) => e.stopPropagation()}>
                            <div className="color-checkbox">
                                <div id="black"></div>
                                <label htmlFor="black">Black</label>
                                <input type="checkbox" name="black" id="" onChange={handleColor}/>
                            </div>
                            <div className="color-checkbox">
                                <div id="brown"></div>
                                <label htmlFor="brown">Brown</label>
                                <input type="checkbox" name="brown" id="" onChange={handleColor}/>
                            </div>
                            <div className="color-checkbox">
                                <div id="grey"></div>
                                <label htmlFor="grey">Grey</label>
                                <input type="checkbox" name="grey" id="" onChange={handleColor}/>
                            </div>
                            <div className="color-checkbox">
                                <div id="blue"></div>
                                <label htmlFor="blue">Blue</label>
                                <input type="checkbox" name="blue" id="" onChange={handleColor}/>
                            </div>
                            <div className="color-checkbox">
                                <div id="beige"></div>
                                <label htmlFor="beige">Beige</label>
                                <input type="checkbox" name="beige" id="" onChange={handleColor}/>
                            </div>
                            <div className="color-checkbox">
                                <div id="yellow"></div>
                                <label htmlFor="yellow">Yellow</label>
                                <input type="checkbox" name="yellow" id="" onChange={handleColor}/>
                            </div>
                            <div className="color-checkbox">
                                <div id="red"></div>
                                <label htmlFor="red">Red</label>
                                <input type="checkbox" name="red" id="" onChange={handleColor}/>
                            </div>

                        </section>
                    )}
                </div>
            </section>
            <section className="products">
                    {filteredShoes.map(shoe =>(
                        <div key={shoe.id} className='shoe-card' onClick={()=>
                            {setSelectedShoe(shoe) 
                            setPage("product")}
                        }>
                            <img src={shoe.image} alt={shoe.name} />
                            <h3>{shoe.company}</h3>
                            <p>{shoe.name}</p>
                            <span>{shoe.price}$</span>
                        </div>
                    ))}
                </section>
        </section>
        </main>
    )
}