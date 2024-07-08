import React from "react";
import profile from '../assets/image.png'

function Card(prop){
    return(
        <div className="text-xl text-center border-4 rounded-xl w-auto mb-5">
        <img src={profile} alt="Profile Picture" className="rounded-full align-center justify-center" />
        <p className="font-thin text-3xl ">{prop.name}</p>
        <p className="text-xl italic">{prop.text}</p>
        </div>
    )
}

export default Card