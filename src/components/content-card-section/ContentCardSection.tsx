import CourseArea from './CourseArea'
import { SearchBar } from './particular/SearchBar'
import ProjectArea from './ProjectArea'

export const ContentCardSection: React.FC = () => {
  return (
    <section className='relative mt-36 md:mt-0'>
      <ProjectArea></ProjectArea>
      <SearchBar></SearchBar>
      <CourseArea></CourseArea>
    </section>
  )
}
