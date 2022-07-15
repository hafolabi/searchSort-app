import React, { useEffect, useState } from 'react'
import './App.css'
import Table from './Table'
// import { Users } from './users'
import axios from 'axios'

export default function App() {

  const [query, setQuery] = useState('')
  const [data, setData] = useState([])

  // const keys = ["first_name", "last_name", "email"]
  

  // console.log(Users[0]["first_name"])

  // const search = (data) => {
  //   return data.filter(item =>
  //     item.first_name.toLowerCase().includes(query) ||
  //     item.last_name.toLowerCase().includes(query) ||
  //     item.email.toLowerCase().includes(query))
  // }


  // const search = (data) => {
  //   return data.filter(item =>
  //     keys.some(key => item[key].toLowerCase().includes(query))
  //       )
  // } 

  useEffect(()=>{
    const fetchUsers = async ()=>{
      const res = await axios.get(`http://localhost:5000?q=${query}`)
      setData(res.data)
    }
   if(query.length === 0 || query.length >2) fetchUsers()
  },[query])

  return (
    <div className='App'>
      <input type='text'
        placeholder='Search...'
        className='search'
        onChange={(e) => setQuery(e.target.value)}
      />

      {/* <Table data={search(Users)} /> */}

      <Table data={data} />


    </div>
  )
}
