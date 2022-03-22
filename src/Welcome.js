import {useContext} from "react";
import {WelcomeContext} from "./WelcomeContext";

const Welcome = () => {

    const {color,setColor} = useContext(WelcomeContext)

    return (
        <div>
            <button onClick={() => setColor('black')}>change color</button>
            <br/>
            {color}
        </div>
    )
}

export default Welcome