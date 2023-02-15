import { Card } from './Card'

export default function CourseArea() {
  
  return (
    <div className='flex justify-center items-center gap-[0.938rem] bg-[#bda6a3] w-[89.938rem] h-[28rem] m-auto'>
      <Card type='course' name='PRO FIGMA | User Interface Design From Beginner to Expert'></Card>
      <Card type='course' name='NodeJs, Typescript, TDD, DDD, Clean Architecture e SOLID'></Card>
      <Card type='course' name='Microservices with NodeJS and React'></Card>
      <Card type='course' name='Full Stack Web development'></Card>
    </div>
  )
}
