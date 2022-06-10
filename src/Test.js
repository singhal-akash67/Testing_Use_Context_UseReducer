import { useContext } from "react";
import { TestContext } from './App'


function Test() {
    const { text, setText } = useContext(TestContext);

    const changeText = () => setText('Changed');
    return (
        <div>
            <button onClick={changeText}>Change Text</button>

            {text}
        </div>
    );
}

export default Test;
