import { useState } from 'react';

export const SearchBar: React.FC = () => {
  const [search, setSearch] = useState<string>('');
  const technologies: string[] = ['HTML', 'CSS']

  const filteredTechs = search.length > 0 
  ? technologies.filter((tech) => tech.toLowerCase().includes(search.toLowerCase()))
  : [];

  // console.log(filteredTechs)

  return (
    <div className='flex items-center bg-[#eaeced] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-9 rounded-full p-0.5'>
      <button className='w-3.5 absolute left-3'>
        <img src="src/assets/icons/searchIcon.svg"></img>
      </button>
      <input type="text" placeholder="Search Technology" className='text-sm pl-8 bg-[#d9d9d9] rounded-l-full border-l-2 border-y-2 border-[#c3b8b8] w-full h-8'
        onChange={(e) => setSearch(e.target.value)}
      />
      <button className='rounded-r-full border-y-2 border-r-2 p-1.5 border-[#c3b8b8]'>
        <img src="src/assets/icons/filterIcon.svg" className='w-4.5 rounded-r-full ml-1 mr-2.5 bg-[#eaeced]'></img>
      </button>
    </div>
  )
}

<img src="src/assets/icons/filterIcon.jpg" alt="Filter icon" className="flex h-32 w-52 border rounded-lg"></img>
