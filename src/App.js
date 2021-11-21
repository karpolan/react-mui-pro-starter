import { ErrorBoundary } from './components';
import { AppRouter, Routes } from './routes';
import { AppStore } from './store';
import { AppThemeProvider } from './theme';
import { AppSnackBarProvider } from './components/AppSnackBar';
import IdleTimer from './components/IdleTimer';

/**
 * Root Application Component
 * @component App
 */
const App = () => {
  return (
    <ErrorBoundary name="App">
      <AppStore>
        <IdleTimer />
        <AppThemeProvider>
          <AppSnackBarProvider>
            <AppRouter>
              <Routes />
            </AppRouter>
          </AppSnackBarProvider>
        </AppThemeProvider>
      </AppStore>
    </ErrorBoundary>
  );
};

export default App;
