import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Header from './Header'


export default function AddEmp() {

  const DunderMifflin = 'DunderMifflin'

  const [employFile, setEmployFile] = useState({})
  const [employList, setEmployList] = useState([])




  const addEmployFile = (e) => {
    e.preventDefault()
    // axios.post(`https://sdg-staff-directory-app.herokuapp.com/api/${DunderMifflin}/employees`,
    //   employFile
    // )
    console.log(employFile)
    // console.log(employFile)
  }
  const getEmployList = (e) => {
    e.preventDefault()
    axios.get(`https://sdg-staff-directory-app.herokuapp.com/api/${DunderMifflin}/employees`
    ).then(resp => {
      // console.log(employList)
      setEmployList(resp.data)
      console.log(resp.data)
    })
  }

  return (
    <>
      <Header />

      <form>
        <section className='name-cont'>
          <div className='name-box'>
            <h2>Personal Information</h2>
            <h3>Full Name <span className='req'>*</span></h3>
            <input type='text' placeholder='First Name'
              onChange={e => {
                setEmployFile(prevData => {
                  prevData.firstName = e.target.value
                  return prevData
                })
              }}
            />

            <h3>Last Name <span className='req'>*</span></h3>
            <input type='text' placeholder='Last Name'
              className='last-name'
              onChange={e => {
                setEmployFile(prevData => {
                  prevData.lastName = e.target.value
                  return prevData
                })
              }}
            />


            <h3>Birth Date <span className='req'>*</span></h3>
            <input type='date' placeholder='Birth Date'
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
            <h3>Address <span className='req'>*</span></h3>
            <input type='text' placeholder='Address'
              onChange={e => {
                setEmployFile(prevData => {
                  prevData.address = e.target.value
                  return prevData
                })
              }}
            />


            <h3>City</h3>
            <input type='text' placeholder='City'
              onChange={e => {
                setEmployFile(prevData => {
                  prevData.city = e.target.value
                  return prevData
                })
              }}
            />


            <h3>Zip Code</h3>
            <input type='text' placeholder='ZipCode'
              onChange={e => {
                setEmployFile(prevData => {
                  prevData.zip = e.target.value
                  return prevData
                })
              }}
            />


            <h3>State</h3>
            <input type='text' placeholder='State'
              onChange={e => {
                setEmployFile(prevData => {
                  prevData.state = e.target.value
                  return prevData
                })
              }}
            />
          </div>
        </section>
      </form >
    </>
  )
}

{/* 
      <FormField display="First NAme" key="firstName" placeholder="" />
      {createFormField("first name", "firstName", "")} */}