import { useState } from "react";

const Greetings = () => {

    const [changeText, setChangedText] = useState(false);

    const chnageTextHandler = () => {
        setChangedText(true);
    }
    return (
        <div>
            <h2>Hello World</h2>
            {!changeText && <p>It's good to see you!</p>}
            {changeText && <p>Changed</p> }
            <button onClick={chnageTextHandler}>Change Text</button>
        </div>
    )
};

export default Greetings;
