import React from "react";
import { Link, useSearchParams } from "react-router-dom";

export default function Brand({ brands }) {
  const [searchParams] = useSearchParams();

  function getBrandUrl(brand) {
    const params = new URLSearchParams(searchParams);
    params.set("brand", brand.toLowerCase());

    return `?${params.toString()}`;
  }

  return (
    <section className="filter-section">
      {brands.map((brand) => {
        const active =
          searchParams.get("brand") === brand.toLowerCase();
        return (
          <Link
            key={brand}
            className={`filter-p color-link ${active ? "active" : ""}`}
            to={getBrandUrl(brand)}>
          {brand}
          </Link>
        );
      })}
    </section>
  );
}