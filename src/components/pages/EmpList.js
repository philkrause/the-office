import React, { useState } from 'react'
import Header from '../Header'
import axios from 'axios'
import { Link } from 'react-router-dom'

export default function EmpList() {

  const [employList, setEmployList] = useState([])
  const [id, setId] = useState('')

  const getEmployList = (e) => {
    e.preventDefault()
    axios.get(`https://sdg-staff-directory-app.herokuapp.com/api/DunderMifflin/employees`
    ).then(resp => {
      // console.log(employList)
      setEmployList(resp.data)
      console.log(resp.data)
    })
  }

  const deleteEmploy = () => {

    axios.delete(`https://sdg-staff-directory-app.herokuapp.com/api/DunderMifflin/employees/${id}`
    ).then(resp => {
      setEmployList(prev => prev.filter(emp => emp.id !== id))
      console.log(id)
    })
  }

  return (
    <>
      <Header />
      <div className='emplist-buttons'>
        <button onClick={getEmployList}>Get Employee List</button>

        <input
          placeholder='Enter Employee ID'
          type='text'
          onChange={e => setId(e.target.value)}
        />
        <button onClick={deleteEmploy}>Delete</button>
      </div>
      <div className='emplist'>
        {employList.map((emp, index) => {
          return (
            <>
              <Link to={{
                pathname: `/EmployeeList/${emp.id}`
              }}>
                < section className='emp-box' >
                  <h3>{emp.jobTitle}</h3>
                  <p>{`${emp.firstName} ${emp.lastName}`}</p>
                  <p>{emp.id}</p>
                </section>
              </Link>
            </>

          )
        })
        }
      </div>


    </>
  )
}