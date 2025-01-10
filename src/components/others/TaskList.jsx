import React from 'react'
import AcceptTask from '../TaskList/AcceptTask'
import NewTask from '../TaskList/NewTask'
import CompleteTask from '../TaskList/CompleteTask'
import FailedTask from '../TaskList/FailedTask'

const TaskList = ({data}) => {
  console.log(data)
  return (
    <div id='taskList' className='mt-10 flex items-center justify-start gap-5 flex-nowrap h-[50%] overflow-x-auto py-5 w-full '>
      {data.tasks.map((elem, idx) => {
        if(elem.active){
          return <AcceptTask key={idx} data = {elem}/>
        }
        if(elem.newTask){
          return <NewTask key={idx} data = {elem}/>
        }
        if(elem.completed){
          return <CompleteTask key={idx} data = {elem}/>
        }
        if(elem.failed){
          return <FailedTask key={idx} data = {elem}/>
        }
      })}
    </div>
  )
}

export default TaskList