import { ChangeAreaProvider, CourseProvider, LanguageProvider, ProjectProvider, SearchProvider, SkillProvider } from './contexts';
import { LandingPage } from './pages/LandingPage';

function App() {
  return (
    <LanguageProvider>
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
    </LanguageProvider>
  );
}

export default App;
