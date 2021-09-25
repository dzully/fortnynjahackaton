import React, {useReducer, createContext} from 'react';

const initialState = {
  authentication: null,
  category: null,
  signUpUserId: null,
  duration: null,
  currentGoals: null,
  createGoals: {
    name: '',
    duration: '',
    category: '',
    price: '',
  },
};

export const Store = createContext(initialState);

export const MainCallback = {
  USER_TYPE: 'user_type',
  HANDLE_CATEGORY: 'user_type',
  HANDLE_SIGN_UP_USER_ID: 'handle_sign_up_user_id',
  HANDLE_DURATION: 'handle_duration',
  HANDLE_CREATE_GOAL: 'handle_create_goal',
  HANDLE_CURRENT_GOAL: 'handle_current_goal',
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
    case MainCallback.HANDLE_DURATION:
      return {
        ...state,
        duration: action.value,
      };
    case MainCallback.HANDLE_CREATE_GOAL:
      return {
        ...state,
        createGoals: {
          ...state.createGoals,
          [action.label]: action.value,
        },
      };
    case MainCallback.HANDLE_CURRENT_GOAL:
      return {
        ...state,
        currentGoals: action.value,
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
