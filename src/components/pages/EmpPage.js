import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Moment from 'react-moment'
import Header from '../Header'

export default function EmpPage(props) {
  const id = props.match.params.id
  const [employFile, setEmployFile] = useState([])

  useEffect(() => {
    axios.get(`https://sdg-staff-directory-app.herokuapp.com/api/DunderMifflin/Employees/${id}`
    ).then(resp => {
      // console.log(employList)
      setEmployFile(resp.data)
      console.log(resp.data)
    })
  }, [])

  return (
    <>
      <Header />
      <div className='emp-cont'>
        <section className='emp-box' >
          <h3>{employFile.jobTitle}</h3>
          <p>{`${employFile.firstName} ${employFile.lastName}`}</p>
          <div>
            <p>{`ID:  ${employFile.id}`}</p>
          </div>

          <h3 style={{ marginBottom: '-.1rem' }}>Address</h3>
          <p style={{ marginBottom: '-.1rem' }}>{employFile.address}</p>
          <p>{`${employFile.city}, ${employFile.state}  ${employFile.zip}`}</p>
          <p>BirthDate:</p>
          <Moment>{employFile.birthday}</Moment>
        </section>
      </div>
    </>
  )
}