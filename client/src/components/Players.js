import React, {useState} from "react";

const Players = (props) => {
    return(
        <div>
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