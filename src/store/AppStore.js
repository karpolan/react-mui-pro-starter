import React, {createContext, useReducer, useContext} from 'react';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import AppReducer from './AppReducer';

const initialAppState = {
  darkMode: false, // Overridden by useMediaQuery('(prefers-color-scheme: dark)') in AppStore
  error: '',
};

/**
 * Instance of React Context for global AppStore
 *
 * import {AppContext} from './store'
 * ...
 * const [state, dispatch] = useContext(AppContext);
 *
 * OR
 *
 * import {useAppStore} from './store'
 * ...
 * const [state, dispatch] = useAppStore();
 *
 */
const AppContext = createContext(initialAppState);

/**
 * Main global Store as HOC with React Context API
 *
 * import AppStore from './store'
 * ...
 * <AppStore>
 *  <App/>
 * </AppStore>
 */
const AppStore = ({children}) => {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
  const [state, dispatch] = useReducer(AppReducer, {...initialAppState, darkMode: prefersDarkMode});
  return <AppContext.Provider value={[state, dispatch]}>{children}</AppContext.Provider>;
};

/**
 * Hook to use the AppStore in functional components
 */
const useAppStore = () => useContext(AppContext);

/**
 * HOC to inject the ApStore to functional or class component
 */
const withAppStore = (Component) => (props) => {
  return <Component {...props} store={useAppStore()} />;
};

export {AppStore as default, AppStore, AppContext, useAppStore, withAppStore};
