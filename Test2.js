import React,{useState,} from 'react'

const Test2 = () => {

    const[users,setUsers] = useState([])

    useEffect(() => {
        const fetchUsers = async () => {
            const res = axios.get("http://localhost:3001/feed")
            setUsers(res.data)
        }
        fetchUsers()
    },[])
    return (
        <div>
            
        </div>
    )
}

export default Test2
