import React, { createContext, useReducer, useContext } from 'react';
import useMediaQuery from '@mui/material/useMediaQuery';
import { localStorageGet } from '../utils/localStorage';
import AppReducer from './AppReducer';

const INITIAL_APP_STATE = {
  darkMode: false, // Overridden by useMediaQuery('(prefers-color-scheme: dark)') in AppStore
  error: '',
  isAuthenticated: false,
  currentUser: undefined,
};

/**
 * Instance of React Context for global AppStore
 */
const AppStoreContext = createContext([INITIAL_APP_STATE, () => null]);

/**
 * Main global Store as HOC with React Context API
 *
 * import AppStoreProvider from './store'
 * ...
 * <AppStoreProvider>
 *  <App/>
 * </AppStoreProvider>
 */
export const AppStoreProvider = ({ children }) => {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
  const previousDarkMode = Boolean(localStorageGet('darkMode'));
  // const tokenExists = Boolean(loadToken());

  const initialState = {
    ...INITIAL_APP_STATE,
    darkMode: previousDarkMode || prefersDarkMode,
    // isAuthenticated: tokenExists,
  };

  const value = useReducer(AppReducer, initialState);
  return <AppStoreContext.Provider value={value}>{children}</AppStoreContext.Provider>;
};

/**
 * Hook to use the AppStore in functional components
 */
export const useAppStore = () => useContext(AppStoreContext);

/**
 * HOC to inject the ApStore to class component
 */
export const withAppStore = (Component) => (props) => {
  return <Component {...props} store={useAppStore()} />;
};
