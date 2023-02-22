import { ChangeAreaProvider } from './contexts/changeAreaContext';
import { AppRoutes } from './routes/index';

function App() {
  return (
    <ChangeAreaProvider>
      <AppRoutes />
    </ChangeAreaProvider>
  );
}

export default App;
