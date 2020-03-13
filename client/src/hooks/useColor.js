import {useState, useEffect} from "react";

export const useColor = () =>{ 
    const [color, setColor] = useState("");
    useEffect(() => {
        document.body.getElementsByClassName("myH1").style.color = "yellow";
    })
    return console.log("useColor.js")
}