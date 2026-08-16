import React from "react";
import {Link, useSearchParams} from "react-router-dom"


export default function Size({sizes}){

    const [searchParams] = useSearchParams();
    // returns the query paramters of our current link

    function getSizeUrl(size){
        const params = new URLSearchParams(searchParams);
        // makes a new url
        params.set("size", size);
        // adds the size to it

        return `?${params.toString()}`
    }

    return(
        <section className="filter-section">
            {sizes.map((item) => {
                const active = searchParams.get("size") === String(item);
                return(  
                    <Link key={item.sizes} to={getSizeUrl(item)}
                    className={`filter-p color-link ${active ? "active" : ""}`}>
                     {item}
                    </Link>)
                    })}
           
        </section>
    )
}