import React from 'react'

const FormInput = ({ handleChange, type, name, placeholder, icon, value }) => {
  return (
    <div className='field'>
      <div className='control has-icons-left'>
        <input
          className='input'
          onChange={handleChange}
          name={name}
          type={type}
          placeholder={placeholder}
          value={value}
        />
        <span className='icon is-small is-left'>
          <i className={`fas fa-${icon}`}></i>
        </span>
      </div>
    </div>
  )
}

export default FormInput
