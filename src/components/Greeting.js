import { useState } from "react";
import Output from "./Output";

const Greetings = () => {

    const [changeText, setChangedText] = useState(false);

    const changeTextHandler = () => {
        setChangedText(true);
    }
    return (
        <div>
            <h2>Hello World</h2>
            {!changeText && <Output>It's good to see you!</Output>}
            {changeText && <Output>Changed</Output> }
            <button onClick={changeTextHandler}>Change Text</button>
        </div>
    )
};

export default Greetings;
