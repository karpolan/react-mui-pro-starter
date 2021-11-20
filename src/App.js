import { ErrorBoundary } from './components';
import { AppRouter, Routes } from './routes';
import { AppStore } from './store';
import { AppThemeProvider } from './theme';
import { SnackBarProvider } from './components/SnackBar';
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
          <SnackBarProvider>
            <AppRouter>
              <Routes />
            </AppRouter>
          </SnackBarProvider>
        </AppThemeProvider>
      </AppStore>
    </ErrorBoundary>
  );
};

export default App;
