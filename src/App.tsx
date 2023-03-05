import { ChangeAreaProvider, CourseProvider, LanguageProvider, MediaQueryProvider, ProjectProvider, SearchProvider, SkillProvider } from './contexts';
import { LandingPage } from './pages/LandingPage';

function App() {
  return (
    <MediaQueryProvider>
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
    </MediaQueryProvider>
  );
}

export default App;
