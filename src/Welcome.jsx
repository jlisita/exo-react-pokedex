import {useState} from "react";

const Welcome = () => {

    const[display, setDisplay] = useState(false);

    const onClickFunction = () =>
    {
        setDisplay(true);
    };

    return (
        <section>
            <button onClick = {onClickFunction} >Cliquez ici</button>
            {display && <p>Bienvenue !</p>} 
        </section>
    );
};

export default Welcome;
