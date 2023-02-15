export const Card: React.FC<{type: string, name: string}> = ({ type, name }: {type: string, name: string}) => {

  return (
    <div className={`flex flex-col ${type === 'project' ? 'h-[17.5rem] bg-[#f9f9f9]' : 'h-[18.75rem] bg-[#f7f7f7]'} w-[18.688rem] p-2 content-between items-center shadow-xl border rounded-2xl border-gray-300`}>
      <p className={`flex ${type === 'project' ? 'text-xl' : 'text-base h-12 items-center'} text-gray-900 m-2 font-medium text-center`}>
        {name}
      </p>
      <hr className="w-64 h-0.5 bg-[#d9d9d9] border-0 rounded"></hr>
      <div className="w-64 h-36 my-4 bg-[#d9d9d9] rounded-md">
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
