#MEN


const [openFilter, setOpenFilter] = React.useState(null);
const [selectedFilters, setSelectedFilters] = React.useState({
    brands:[],
    colors:[],
    minPrice:"",
    maxPrice:"",
})

const [selectedType, setSelectedType] = React.useState(null);

const filteredShoes = shoes.filter(shoe => {
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