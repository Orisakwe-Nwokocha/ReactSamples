import FilledButton from "../../../components/FilledButton";
import {useState} from "react";

const Hero = () => {
    const [color, setColor] = useState("pink");
    return (
        <>
            <FilledButton color={"#f765af"} text={"Ara"}/>
            <br/>
            <FilledButton color={"#1f1f1f"} text={"Orisha"}/>
            <p>Hello Mavericks</p>
            <h1>Aramide likes {color} colour</h1>
            <button onClick={() =>{
                setColor("blue")
            }}>{color}</button>
        </>
    );
}

export default Hero;