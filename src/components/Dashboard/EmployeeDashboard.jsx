import React from 'react'
import Header from '../others/Header'
// import TaskList from '../others/TaskList'
import TaskListNumber from '../others/TaskListNumber'
import TaskList from '../TaskList/TaskList'


const EmployeeDashboard = (props) => {
  
  return (
    <div className="p-10 bg-[#1C1C1C] h-screen">
      
      <Header changeUser = {props.changeUser} data={props.data}></Header>
      <TaskListNumber data={props.data}></TaskListNumber>
      {/* <TaskList data={props.data}></TaskList> */}
      <TaskList data={props.data} />
    </div>
  )
}

export default EmployeeDashboard
