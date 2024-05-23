import FilledButton from "../../../components/FilledButton";
import {useState} from "react";

const Hero = () => {
    const [color, setColor] = useState("pink");
    const [car, setCar] = useState({
        model: "Ford",
        year: "1964",
        color: "red",
        brand: "Mustang"

    });

    const updateColor = (value) => {
        setCar(prevState => {
            return {...prevState, color: value};
        })
    };

    return (
        <>
            <FilledButton color={"#f765af"} text={"Ara"}/>
            <br/>
            <FilledButton color={"#1f1f1f"} text={"Orisha"}/>

            <p>Hello Mavericks</p>

            <h1>Aramide likes {color} colour</h1>
            <button onClick={() => {
                setColor("blue")
            }}>{color}</button>

            <h1>My car is a {car.color} {car.brand}</h1>
            <button onClick={() => {
                updateColor("blue")
            }}>blue</button>
            <br/>
            <button onClick={() => {
                updateColor("black")
            }}>black</button>
            <br/>
            <button onClick={() => {
                updateColor("red")
            }}>red</button>


        </>
    );
}

export default Hero;