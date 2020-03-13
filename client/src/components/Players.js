import React, {useState} from "react";
import useColor from "../hooks/useColor";

const Players = (props) => {
    const [color, setColor] = useColor();
    return(
        <div>
            <h1 id="myH1">Womans World Cup Data</h1>
            {props.playersArray.map(player =>{
                return(
                    <>
                    <h3>{player.name}</h3>
                    <p>{player.country}</p>
                    </>
                )
            })}
        </div>
    )
}

export default Players;