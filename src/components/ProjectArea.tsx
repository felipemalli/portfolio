import { Card } from './Card'

export default function ProjectArea() {
  
  return (
    <div className='flex justify-center items-center gap-[0.938rem] bg-[#D5685A] w-[89.938rem] h-[28rem] m-auto'>
      <Card type='project' name='Portfolio'></Card>
      <Card type='project' name='Trybe Futebol Club'></Card>
      <Card type='project' name='Drone Feeder'></Card>
      <Card type='project' name='Clean Schedule'></Card>
    </div>
  )
}
