import React, {useState, UseEffect} from 'react'
import axios from 'axios'

const Test = () => {

    const [users, setUsers] = useState([])

    useEffect(() => {
        const fetchDatabase = async () => {
            const res = await axios.get("http://localhost:3001/feed");
            setUsers(res.data)
        }
        fetchDatabase()
    },[])

    return(
        <div>
            {
                users.map((user) => (
                    <div key={user._id}>
                        <p>{user.name}</p>
                    </div>
                ))
            }
        </div>
    )
//     const [users,setUsers]=useState([])

//     useEffect(() => {
//         const fetchDatabase = async () => {
//             const res = await axios.get("http://localhost:3001/feed");
//             setUsers (res.data)
//         }
//         fetchDatabase
//     },[])

//     return(
//         <div>
//  {
//           users.map((user) => (
//               <div key={user._id}>
//                   <p>{user.status}</p>
//                   <p>{user.description}</p>
//                   <p>{user.name}</p>

//               </div>
//           ))
//       }

//         </div>
     
//     )
}

export default Test