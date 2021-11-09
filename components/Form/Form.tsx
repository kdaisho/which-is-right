import React, { useState } from 'react'

type handleChangeProps = {
  target: {
    value: string
  }
}

const Form = ({ id }) => {
  const [searchTerm, setSearchTerm] = useState('')

  const handleChange = ({ target }: handleChangeProps) => {
    setSearchTerm(target.value)
  }

  return (
    <div>
      <label>
        Form {id}
        <input
          type='text'
          className='border-gray-400 border-solid border-2'
          value={searchTerm}
          onChange={handleChange}
        />
      </label>
    </div>
  )
}

export default Form
