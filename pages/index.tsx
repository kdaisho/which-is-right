import React, { useState } from 'react'
import Form from '../components/Form'
import Head from 'next/head'

export default function Home() {
  const initial = { id: 0 }
  const [forms, setForms] = useState([initial])
  const [searchTerm, setSearchTerm] = useState('')

  const handleChange = ({ target }: handleChangeProps) => {
    setSearchTerm(target.value)
  }

  const handleAddForm = () => {
    const prevId = forms[forms.length - 1].id
    setForms([...forms, { id: prevId + 1 }])
  }

  const handleSubmit = () => {
    console.log('Submit:', searchTerm)
  }

  return (
    <>
      <Head>
        <title>Which is right</title>
        <meta name='description' content='Which is right?' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <div className='flex justify-between flex-col w-full align-middle'>
        <main className='container max-w-screen-xl mx-auto h-main'>
          <h1>Which is right?</h1>
          {forms.length &&
            forms.map(form => (
              <div key={form.id}>
                <Form
                  id={form.id}
                  handleChange={handleChange}
                  searchTerm={searchTerm}
                />{' '}
              </div>
            ))}
          <button onClick={handleAddForm}>Add</button>
          <button onClick={handleSubmit}>Submit</button>
        </main>

        <footer className='bg-blue-500 h-16 w-full flex justify-center'>
          <div className='container max-w-screen-xl'>
            <p className='text-white'>
              Powered by&#32;
              <a
                href='https://daishodesign.com'
                target='_blank'
                rel='noopener noreferrer'
              >
                daishodesign.com
              </a>
            </p>
          </div>
        </footer>
      </div>
    </>
  )
}
