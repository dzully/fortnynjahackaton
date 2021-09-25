import React, {useReducer, createContext} from 'react';

const initialState = {
  authentication: null,
  category: null,
  signUpUserId: null,
};

export const Store = createContext(initialState);

export const MainCallback = {
  USER_TYPE: 'user_type',
  HANDLE_CATEGORY: 'user_type',
  HANDLE_SIGN_UP_USER_ID: 'handle_sign_up_user_id',
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
    case MainCallback.HANDLE_SIGN_UP_USER_ID:
      return {
        ...state,
        signUpUserId: action.value,
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
