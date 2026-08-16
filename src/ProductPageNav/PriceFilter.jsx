import React, { useState } from "react";
import "../men.css";

import {Link, useSearchParams} from "react-router-dom"

export default function PriceFilter() {

  const [searchParams,setSearchParams]= useSearchParams()

  function getPriceUrl(min,max){
    const params = new URLSearchParams(searchParams);
    params.set("min" , min)
    params.set("max", max)
    setSearchParams(params)
  }
  const [priceMin, setPriceMin] = useState(200);
  const [priceMax, setPriceMax] = useState(400);

  const min = 0;
  const max = 2000;

  const minPercent = (priceMin / max) * 100;
  const maxPercent = (priceMax / max) * 100;

  return (
    <div className="price-filter">
      
    
      <div className="price-slider">
        <div className="price-track"></div>

        <div
          className="price-track-active"
          style={{
            left: `${minPercent}%`,
            width: `${maxPercent - minPercent}%`,
          }}
        ></div>

        <input
          type="range"
          min={min}
          max={max}
          value={priceMin}
          onChange={(e) => {
            const value = Number(e.target.value);

            if (value < priceMax) {
              setPriceMin(value);
              getPriceUrl(value, priceMax);
            }
          }}
        />

        <input
          type="range"
          min={min}
          max={max}
          value={priceMax}
          onChange={(e) => {
            const value = Number(e.target.value);

            if (value > priceMin) {
              setPriceMax(value);
              getPriceUrl(priceMin, value);
            }
          }}
        />
      </div>
      <div className="price-inputs">
        <div className="price-input">
          <span>$</span>
          <input
            type="number"
            min={min}
            max={priceMax}
            value={priceMin}
            onChange={(e) => {
              const value = Number(e.target.value);
              if (value >= min && value < priceMax) {
                setPriceMin(value);
              }
            }}
          />
        </div>

        <span className="price-dash">-</span>

        <div className="price-input">
          <span>$</span>
          <input
            type="number"
            min={priceMin}
            max={max}
            value={priceMax}
            onChange={(e) => {
              const value = Number(e.target.value);
              if (value > priceMin && value <= max) {
                setPriceMax(value);
              }
            }}
          />
        </div>
      </div>
    </div>
  );
}