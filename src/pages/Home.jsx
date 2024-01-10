import Navbar from "../components/Navbar/Navbar"
import { useState } from "react"
import Slider from "../components/slider/Slider"

const Home = () => {
    const [title, setTitle] = useState("Hello the text change")

    const handleClick = () => {
        setTitle('Hi it worked')
    }

    const handleAnotherClick = (fName, e) => {
        alert(`Hello ${fName}`)
        console.log(e.target);

    }
    return (
        <div>
            <Navbar />
            {/* slider */}
            <Slider />


            <h3>{title}</h3>

            <button className="btn btn-dark my-3 mx-5" onClick={handleClick}>Click me</button>
            <button className="btn btn-info my-3 mx-5" onClick={(e) => { handleAnotherClick('Nathaniel', e) }}>click again</button>
        </div>
    )
}

export default Home