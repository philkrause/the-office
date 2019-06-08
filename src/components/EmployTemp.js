import React from 'react'

export default function EmployTemp() {

  return (
    <h3>props.name <span className='req'>*</span></h3>
    <input type='text' placeholder={props.place}
      onChange={e => {
        setEmployFile(prevData => {
          prevData.{ props.nameTag } = e.target.value
          return prevData
        })
      }}
    />
  )

}