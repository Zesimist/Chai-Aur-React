// import { useState,useContext } from "react"
// import userContext from "../context/UserContext"

// function Login() {
//     const [username,setUsername] = useState('')
//     const [password,setPassword] = useState('')
//     const {setUser} =useContext(userContext)

//     const handleSubmit=(e)=>{
//         e.preventDefault()
//         setUser({username,password})
//     }
//   return (
//     <div>
//         <h2>Login</h2>
//         <input type="text" placeholder="username" value={username} onChange={(e)=>setUsername(e.target.value)}></input>
//         <input type="text" placeholder="Password" value={password} onChange={(e)=>setPassword(e.target.value)}></input>
//         <button onClick={handleSubmit}>Submit</button>
//     </div>
//   )
// }
// export default Login