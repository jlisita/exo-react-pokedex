import {useState} from "react";

const Counter = () => {

    const[nbrClicks, setNbrClicks] = useState(0);

    const updateCounter = () => {
        setNbrClicks(nbrClicks+1)
    };

    return (
        <section>
            <button onClick = {updateCounter}>Compteur</button>
            <p>{nbrClicks}</p>
        </section>
    );
};

export default Counter;