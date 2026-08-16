import React from "react";
import { useSearchParams } from "react-router-dom";
import "../Products/Products.css";

export default function Filter({ name, value }) {
    const [searchParams, setSearchParams] = useSearchParams();

    function remove() {
    const params = new URLSearchParams(searchParams);

    if (name === "Maximum price") {
        params.delete("max");
    }

    if (name === "Minimum price") {
        params.delete("min");
    }

    if (name !== "Maximum price" && name !== "Minimum price") {
        params.delete(name.toLowerCase());
    }

    setSearchParams(params);
}

    return (
        <div className="filter-used">
            <p>
                {name}: {value.charAt(0).toUpperCase() + value.slice(1)}
            </p>
            <i
                className="fa-solid fa-x"
                onClick={remove}
            ></i>
        </div>
    );
}