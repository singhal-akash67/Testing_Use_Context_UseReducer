import { useContext } from "react";
import {TestContext}from './App'


function Test() {
  const text = useContext(TestContext);
  return (
    <div>
      {text}
    </div>
  );
}

export default Test;
