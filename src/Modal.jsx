import images from "./images"
import React from "react"

export default function Modal(props){

const style={
    opacity: 0.5,
    border: "2px solid hsl(26, 100%, 55%)"
}


    return(
<section className="Images">


<img src={props.isActive} alt="" id="big" />

<div className="SmallDivImages">
{props.images.map((image)=>(
<img src={image.thumbnail} onClick={() => props.setIsActive(image.src)} style={image.src===props.isActive? style : null}></img>
))}
</div>
</section>


    )
}