import { Card } from './Card'

export default function CourseArea() {
  
  return (
    <div className='flex flex-col justify-evenly items-center h-[26rem] m-auto rounded-b-[5rem] border border-[#737E86]'>
      <div className='flex justify-center items-center gap-[0.938rem]'>
        <Card type='course' name='Microservices with NodeJS and React'></Card>
        <Card type='course' name='PRO FIGMA | User Interface Design From Beginner to Expert'></Card>
        <Card type='course' name='NodeJs, Typescript, TDD, DDD, Clean Architecture e SOLID'></Card>
        <Card type='course' name='Full Stack Web development'></Card>
        <Card type='course' name='Amazon Web Services (AWS): Essencial'></Card>
      </div>
      <h2 className='text-4xl font-bold text-[#220909]'>Courses</h2>
    </div>
  )
}
