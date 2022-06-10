import { createContext, useReducer, useState } from 'react';


export const TestContext = createContext();

const testReducer = (state, action) => {
  switch (action) {
    case 'first':
      return 'first state changed';
    case 'second':
      return 'second state changed';
  }

}

export function Parent({children}) {
    const [text, dispatch] = useReducer(testReducer, 'initial state');
    return <TestContext.Provider value={{text, dispatch}}>
        {children}
    </TestContext.Provider>

}