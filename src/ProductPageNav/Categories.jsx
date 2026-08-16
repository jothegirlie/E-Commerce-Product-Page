import React from "react";
import {Link, useSearchParams} from "react-router-dom"


export default function Categories({categories}){

    const [searchParams] = useSearchParams();

    function getCategoryUrl(category){
        const params = new URLSearchParams(searchParams)
        params.set("category" , category.toLowerCase())

        return `?${params.toString()}`

    }

    return(
        categories.map((item)=>{
          const active =
          searchParams.get("category") === item.toLowerCase();
            return(
                <Link key={item} to={getCategoryUrl(item)}
                 className={`color-link ${active ? "cat-active" : ""}`}>
                 {item}
           </Link>
            )
        })
    )
}