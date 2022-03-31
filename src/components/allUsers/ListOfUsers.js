import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import User from './User'
import axios from 'axios';
import "./User.css";

const ListOfUsers = () => {
  const [users, setUsers] = useState([]);
  const token = useSelector(state => state.token)


  useEffect(() => {
    async function fetchData() {
      const { data } = await axios.get(
        "http://localhost:3001/api/user/all_info/:page?",
        {
          headers: { Authorization: token },
        }
      );

      setUsers(data.profiles);
    }
    fetchData();
  }, []);


  return (
    <>
    <div className='User_Container'>
      <User users={users}/>
      
    </div>

    </>
  )
}
export default ListOfUsers