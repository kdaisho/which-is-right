import React, { FunctionComponent } from 'react'

const Form: FunctionComponent<FormProps> = ({
  id,
  handleChange,
  searchTerm,
}: FormProps) => {
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
