import { ChangeAreaProvider, CourseProvider, ProjectProvider, SearchProvider, SkillProvider } from './contexts';
import { AppRoutes } from './routes/index';

function App() {
  return (
    <SearchProvider>
      <ChangeAreaProvider>
        <ProjectProvider>
          <CourseProvider>
            <SkillProvider>
              <AppRoutes />
            </SkillProvider>
          </CourseProvider>
        </ProjectProvider>
      </ChangeAreaProvider>
    </SearchProvider>
  );
}

export default App;
