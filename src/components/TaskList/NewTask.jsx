import React from 'react'

const NewTask = ({data}) => {
  return (
    <div className='flex-shrink-0 h-full w-[300px] p-5 bg-red-400 rounded-xl '>
        <div className='flex justify-between items-center'>
            <h2 className='bg-red-600 text-sm px-3 py-1 rounded '>{data.category}</h2>
            <h3 className='text-sm'>{data.taskDate}</h3>
        </div>
        
        <h2 className='mt-5 text-2xl font-semibold' >{data.title}</h2>
        <p className='text-sm mt-2'>{data.description}</p>
      <div className='flex justify-between mt-4'></div>
      <button className='w-full mt-5 bg-yellow-400'>Accept Task</button>
      </div>
  )
}

export default NewTask

// import React from 'react'

// const NewTask = ({data}) => {
//     return (
//         <div className='flex-shrink-0 h-full w-[300px] p-5 bg-green-400 rounded-xl'>
//             <div className='flex justify-between items-center'>
//                 <h3 className='bg-red-600 text-sm px-3 py-1 rounded'>{data.category}</h3>
//                 <h4 className='text-sm'>{data.taskDate}</h4>
//             </div>
//             <h2 className='mt-5 text-2xl font-semibold'>{data.taskTitle}</h2>
//             <p className='text-sm mt-2'>
//             {data.description}
//             </p>
//             <div className='mt-6'>
//                 <button className='bg-blue-500 rounded font-medium py-1 px-2 text-xs'>Accept Task</button>
//             </div>
//         </div>
//     )
// }

// export default NewTask
