import { useState } from 'react';

export const SearchBar: React.FC = () => {
  const [search, setSearch] = useState<string>('');
  const technologies: string[] = ['HTML', 'CSS']

  const filteredTechs = search.length > 0 
  ? technologies.filter((tech) => tech.toLowerCase().includes(search.toLowerCase()))
  : [];

  console.log(filteredTechs)

  return (
    <div className='flex items-center bg-[#fbfbfb] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-9 rounded-full p-0.5 shadow-md hover:shadow-lg'>
      <button className='flex justify-center items-center w-7 h-7 left-1 pr-0.5 rounded-full absolute bg-[#d9d9d9] hover:bg-[#eaeced] active:bg-[#d9d9d9]'>
        <img className='w-3.5' src="src/assets/icons/searchIcon.svg"></img>
      </button>
      <input type="text" className='text-sm pl-8 bg-[#d9d9d9] rounded-l-full border-y-2 border-l-2 border-[#c3b8b8] w-full h-8 focus:border-r-2 focus:border-[#D5685A] outline-none'
        placeholder="Search Technology" 
        onChange={(e) => setSearch(e.target.value)}
      />
      <button className='rounded-r-full border-y-2 border-r-2 h-8 px-2 border-[#c3b8b8] bg-[#d9d9d9] hover:bg-[#eaeced]'>
        <img src="src/assets/icons/filterIcon.svg" className='w-4.5 rounded-r-full mr-1.5'></img>
      </button>
    </div>
  )
}
