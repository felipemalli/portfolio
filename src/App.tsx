import { ChangeAreaProvider, CourseProvider, ProjectProvider, SearchProvider, SkillProvider } from './contexts';
import { LandingPage } from './pages/LandingPage';

function App() {
  return (
    <SearchProvider>
      <ChangeAreaProvider>
        <ProjectProvider>
          <CourseProvider>
            <SkillProvider>
              <LandingPage/>
            </SkillProvider>
          </CourseProvider>
        </ProjectProvider>
      </ChangeAreaProvider>
    </SearchProvider>
  );
}

export default App;
