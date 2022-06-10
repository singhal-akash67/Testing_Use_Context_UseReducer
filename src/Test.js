import { useContext } from "react";
import { TestContext } from './Parent'


function Test() {
    const { text, dispatch } = useContext(TestContext);

    const changeText = () => dispatch('first');
    return (
        <div>
            <button onClick={changeText}>Change Text</button>

            {text}
        </div>
    );
}

export default Test;
