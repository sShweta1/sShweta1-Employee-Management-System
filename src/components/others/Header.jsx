// import React, { useEffect, useState } from 'react'
// import { getLocalStorage, setLocalStorage } from '../../Utils/localStorage'


// const Header = ({changeUser}) => {
//   const [username, setUsername] = useState('')

//   useEffect(() => {
//     const storedUser = localStorage.getItem('loggedInUser')
//     const parsedData = JSON.parse(storedUser)
 
//   if(!storedUser){
//     setUsername('admin')
//   }
//   else{
//     setUsername(parsedData.data.firstName)
//   }
// },[])

//   const logOutUser = () => {
//     localStorage.setItem('loggedInUser','')
//      changeUser('')
//      setUsername('Guest')
//     // window.location.reload()
//   }
//   return (
//     <div className='flex items-end justify-between'>
//       <h1 className='text-2xl'>Hello <br /> <span className='text-3xl font-semibold'>{username} 👋</span></h1>
//       <button onClick = {logOutUser} className='bg-red-600 text-lg font-medium text-white px-5 py-2 rounded-smalling rounded-sm'>Log Out</button>
      
      
//     </div>
//   )
// }

// export default Header

import React, { useState } from 'react'
import { setLocalStorage } from '../../utils/localStorage'

const Header = (props) => {

  // const [username, setUsername] = useState('')

  // if(!data){
  //   setUsername('Admin')
  // }else{
  //   setUsername(data.firstName)
  // }

  const logOutUser = ()=>{
    localStorage.setItem('loggedInUser','')
    props.changeUser('')
    // window.location.reload()
  }

  
  return (
    <div className='flex items-end justify-between'>
        <h1 className='text-2xl font-medium'>Hello <br /> <span className='text-3xl font-semibold'>username 👋</span></h1>
        <button onClick={logOutUser} className='bg-red-600 text-base font-medium text-white px-5 py-2 rounded-sm'>Log Out</button>
    </div>
  )
}

export default Header