import React, { createContext, useReducer } from 'react';

const initialState = {
  activeMenuItem: null,
  activeProject: null,
};

const store = createContext(initialState);
const { Provider } = store;

const StateProvider = ({ children }) => {
  const [state, dispatch] = useReducer((state, action) => {
    switch (action.type) {
      case 'SET_ACTIVE_MENU_ITEM':
        return {
          ...state,
          activeMenuItem: action.payload,
        };
      case 'SET_ACTIVE_PROJECT':
        return {
          ...state,
          activeProject: action.payload,
        };
      default:
        throw new Error();
    }
  }, initialState);

  return <Provider value={{ state, dispatch }}>{children}</Provider>;
};

export { store, StateProvider };