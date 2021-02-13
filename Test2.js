import React,{useState,} from 'react'
import axios from "axios"

const Test2 = () => {

    const [users,setUsers] = useState([])

    useEffect(() => {
        const fetchUsers = async () => {
            const res = await axios.get("http://localhost:3001/feed")
            setUsers(res.data)
        }
        fetchUsers()
    },[])

    return(
        <div>
            {
                users.map((user => (
                    <div key={user._id}>
                        <p>{user.status}</p>
                    </div>
                )))
            }
        </div>
    )
    // const[users,setUsers] = useState([])

    // useEffect(() => {
    //     const fetchUsers = async () => {
    //         const res = axios.get("http://localhost:3001/feed")
    //         setUsers(res.data)
    //     }
    //     fetchUsers()
    // },[])
    // return (
    //     <div>
            
    //     </div>
    // )
}

export default Test2
