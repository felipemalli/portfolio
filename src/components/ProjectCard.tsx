export default function ProjectCard() {
  
  return (
    <div className="flex flex-col w-72 p-2.5 m-2.5 bg-[#f9f9f9] content-between items-center shadow-xl border rounded-2xl border-gray-300">
      <p className="text-gray-700 m-2 font-medium text-xl">
        Card Project Name
      </p>
      <hr className="w-64 h-0.5 bg-[#d9d9d9] border-0 rounded"></hr>
      <div className="w-64 h-40 my-4 bg-[#d9d9d9] rounded-md">
        <img></img>
      </div>
      <div className="flex space-x-3">
        <button className="w-20 h-8 bg-[#d9d9d9] rounded-md">
          Back End
        </button>
        <button className="w-20 h-8 bg-[#d9d9d9] rounded-md">
          Front End
        </button>
        <button className="w-20 h-8 bg-[#d9d9d9] rounded-md">
          Devops
        </button>
      </div>
    </div>
  )
}
