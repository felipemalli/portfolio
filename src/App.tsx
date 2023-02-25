import { ChangeAreaProvider, CourseProvider, ProjectProvider } from './contexts';
import { AppRoutes } from './routes/index';

function App() {
  return (
    <ChangeAreaProvider>
      <ProjectProvider>
        <CourseProvider>
          <AppRoutes />
        </CourseProvider>
      </ProjectProvider>
    </ChangeAreaProvider>
  );
}

export default App;
