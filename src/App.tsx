import { ChangeAreaProvider, CourseProvider, ProjectProvider, SearchProvider } from './contexts';
import { AppRoutes } from './routes/index';

function App() {
  return (
    <SearchProvider>
      <ChangeAreaProvider>
        <ProjectProvider>
          <CourseProvider>
            <AppRoutes />
          </CourseProvider>
        </ProjectProvider>
      </ChangeAreaProvider>
    </SearchProvider>
  );
}

export default App;
