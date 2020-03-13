import {useState, useEffect} from "react";

const useColor = () =>{ 
    const [color, setColor] = useState("green");
    useEffect(() => {
        console.log(document.getElementById("myH1"))
        document.getElementById("myH1").style.color = color;
    }, [])
    console.log(color)
    return [color, setColor] 
}

export default useColor;