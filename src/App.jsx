import { useContext, useEffect, useState } from 'react'
import Login from './components/Auth/Login'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard'
import AdminDashboard from './components/Dashboard/AdminDashboard'
import { getLocalStorage, setLocalStorage } from './Utils/localStorage'
import { AuthContext } from './context/AuthProvider'

function App() {
  
  const [user, setUser] = useState('')
  const [loggedInUserData, setLoggedInUserData] = useState(null)
  const [userData, setUserData] = useContext(AuthContext)
  
  useEffect(() => {

    
      const loggedInUser = localStorage.getItem("loggedInUser")
      if(loggedInUser){
        
        const userData = JSON.parse(loggedInUser)
        setUser(userData.role)
        setLoggedInUserData(userData.data)
      }
    
  },[])

  const handleLogin = (email, password) =>{
    if(email == 'admin@example.com' && password == '123'){
      setUser('admin')
      localStorage.setItem('loggedInUser', JSON.stringify({role:'admin'}))
      return;
    }
    else if (userData){
      const employee = userData.find((e) => e.email == email && e.password == password)
      if(employee){
        setUser('employee')
        setLoggedInUserData(employee)
        localStorage.setItem('loggedInUser', JSON.stringify({role:'employee', data:employee}))
        return;
      }
      
      
    }
    else{
      alert("Invalid Credentials")
    }
  }

  // const data = useContext(AuthContext)
  // console.log(data)

  return (
    
      <>
      {!user ? <Login handleLogin={handleLogin}/>: ''}
      {user == 'admin' ? <AdminDashboard changeUser={setUser}></AdminDashboard>: (user== 'employee' ? <EmployeeDashboard changeUser={setUser} data={loggedInUserData}/> : null)}
      {/* <EmployeeDashboard/> */}
      {/* <AdminDashboard></AdminDashboard> */}
      </>
    
  )
}

export default App
