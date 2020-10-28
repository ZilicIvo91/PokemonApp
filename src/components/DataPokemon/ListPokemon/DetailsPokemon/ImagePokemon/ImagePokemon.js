import React, { useState } from 'react'
import './ImagePokemon.scss';
import { FiArrowLeft } from "react-icons/fi";
import { AiOutlineArrowRight } from "react-icons/ai";


export default function ImagePokemon({ pokemon }) {
    const [index, setIndex] = useState(0);
    let sliderArray = [];

    for(let key in pokemon.sprites) {
        if(key.includes("front_default")){
            sliderArray.push(pokemon.sprites[key])
        }
    }
    for(let key in pokemon.sprites) {
        if(pokemon.sprites[key]){
            if((key === "other") || (key === "versions") || (key === 'front_default')){
                continue
            }
            sliderArray.push(pokemon.sprites[key])
        }
    }
    
    const goLeft = () => {
        const nextIndex = index - 1;
        if (nextIndex < 0) {
            setIndex(sliderArray.length - 1);
        }else{
            setIndex(nextIndex);
        }
    }
    
    const goRight = () => {
        setIndex((index + 1) % sliderArray.length);
    }
    return (
        <div className="imagePokemon-container">
            <img src={sliderArray[index]} alt={sliderArray[index]} className="image"/>
            <button id="goLeft" className="btn" onClick={goLeft}><FiArrowLeft fontSize="2rem" /></button>
            <button id="goRight" className="btn" onClick={goRight}><AiOutlineArrowRight fontSize="2rem"/></button>
        </div>
    )
}
