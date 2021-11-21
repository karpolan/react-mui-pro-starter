import { BrowserRouter } from 'react-router-dom';

/**
 * Main Router of the Application
 * @component AppRouter
 */
const AppRouter = ({ children }) => {
  return <BrowserRouter>{children}</BrowserRouter>;
};

export default AppRouter;
