import React, {useReducer, createContext} from 'react';

const initialState = {
  authentication: null,
  category: null,
};

export const Store = createContext(initialState);

export const MainCallback = {
  USER_TYPE: 'user_type',
  HANDLE_CATEGORY: 'user_type',
};

const reducer = (state, action) => {
  switch (action.type) {
    case MainCallback.USER_DATA:
      return {
        ...state,
        authentication: action.value,
      };
    case MainCallback.HANDLE_CATEGORY:
      return {
        ...state,
        category: action.value,
      };

    default:
      return state;
  }
};

export const StoreProvider = ({children}) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const value = {state, dispatch};
  return <Store.Provider value={value}>{children}</Store.Provider>;
};
