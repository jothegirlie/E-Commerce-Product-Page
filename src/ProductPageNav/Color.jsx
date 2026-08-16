import React from "react";
import { Link, useSearchParams } from "react-router-dom";

export default function Color({ colors }) {
  const [searchParams] = useSearchParams();

  function getColorUrl(color) {
    const params = new URLSearchParams(searchParams);
    params.set("color", color.toLowerCase());

    return `?${params.toString()}`;
  }

  return (
    <section className="filter-section">
      {colors.map((item) => {
        const active =
          searchParams.get("color") === item.color.toLowerCase();

        return (
          <Link key={item.color} to={getColorUrl(item.color)}
            className={`color-link ${active ? "active" : ""}`}>
            <div className="c-options">
              <div
                className="color-circle"
                style={{ backgroundColor: item.hex }}/>
              <p className="c-p">{item.color}</p>
            </div>
          </Link>
        );
      })}
    </section>
  );
}