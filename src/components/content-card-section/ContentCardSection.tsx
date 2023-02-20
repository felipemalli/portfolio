import { IChildrenProps } from '../../interfaces'
import CourseArea from './particular-components/CourseArea'
import ProjectArea from './particular-components/ProjectArea'
import { SearchBar } from './particular-components/SearchBar'

export const ContentCardSection: React.FC<IChildrenProps> = ({children}: IChildrenProps) => {
  return (
    <section className='relative mt-36 md:mt-0'>
      <ProjectArea></ProjectArea>
      <SearchBar></SearchBar>
      <CourseArea></CourseArea>
    </section>
  )
}
