import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Header from './Header'


export default function AddEmp() {

  const [employFile, setEmployFile] = useState({})

  const addEmployFile = (e) => {
    e.preventDefault()
    axios.post(`https://sdg-staff-directory-app.herokuapp.com/api/DunderMifflin/employees`,
      employFile
    ).then(
      alert('Form was Submitted'),
      console.log(employFile)
    )
  }

  return (
    <>
      <Header />

      <form onSubmit={addEmployFile}>
        <section className='name-cont'>
          <div className='name-box'>
            <h2>Personal Information</h2>
            <h3>Job Title <span className='req'>*</span></h3>
            <input type='text'
              className='last-name'
              onChange={e => {
                setEmployFile(prevData => {
                  prevData.jobTitle = e.target.value
                  return prevData
                })
              }}
            />
            <h3>Full Name <span className='req'>*</span></h3>
            <input type='text'
              onChange={e => {
                setEmployFile(prevData => {
                  prevData.firstName = e.target.value
                  return prevData
                })
              }}
            />

            <h3>Last Name <span className='req'>*</span></h3>
            <input type='text'
              className='last-name'
              onChange={e => {
                setEmployFile(prevData => {
                  prevData.lastName = e.target.value
                  return prevData
                })
              }}
            />
            <h3>Birth Date <span className='req'>*</span></h3>
            <input type='date'
              onChange={e => {
                setEmployFile(prevData => {
                  prevData.birthday = e.target.value
                  return prevData
                })
              }}
            />

          </div>
        </section >
        <section className='address-cont'>
          <div className='address-box'>
            <h2>Contact  Information</h2>
            <h3>Address <span className='req'>*</span></h3>
            <input type='text'
              onChange={e => {
                setEmployFile(prevData => {
                  prevData.address = e.target.value
                  return prevData
                })
              }}
            />


            <h3>City</h3>
            <input type='text'
              onChange={e => {
                setEmployFile(prevData => {
                  prevData.city = e.target.value
                  return prevData
                })
              }}
            />


            <h3>Zip Code</h3>
            <input type='text'
              onChange={e => {
                setEmployFile(prevData => {
                  prevData.zip = e.target.value
                  return prevData
                })
              }}
            />


            <h3>State</h3>
            <input type='text'
              onChange={e => {
                setEmployFile(prevData => {
                  prevData.state = e.target.value
                  return prevData
                })
              }}
            />
          </div>
          <button onClick={addEmployFile} className='form-button'>Submit</button>
        </section>
      </form >

    </>
  )
}

{/* 
      <FormField display="First NAme" key="firstName" placeholder="" />
      {createFormField("first name", "firstName", "")} */}