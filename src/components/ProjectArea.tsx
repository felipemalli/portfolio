import { Card } from './Card'

export default function ProjectArea() {

  return (
    <div className='flex flex-col justify-evenly items-center bg-[#D5685A] h-[26rem] m-auto rounded-t-[5rem]'>
      <h2 className='text-4xl font-bold text-[#f9f9f9]'>Projects</h2>
      <div className='flex justify-center items-center gap-[0.938rem]'>
        <Card type='project' name='Portfolio'></Card>
        <Card type='project' name='Trybe Futebol Club'></Card>
        <Card type='project' name='Drone Feeder'></Card>
        <Card type='project' name='Clean Schedule'></Card>
        <Card type='project' name='Clean Schedule'></Card>
      </div>
    </div>
  )
}
