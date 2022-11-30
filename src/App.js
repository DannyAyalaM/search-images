import Header from "./components/Header"
import { Form, Formik } from "formik"
import Input from "./components/Input"
import Main from "./components/Main"
import { useState } from "react"
import Images from "./components/Images"

const validate = (values) => {
  const errors = {}

  if(!values.search) {
    errors.search = 'Write something !'
  }

  return errors
}

const App = () => {
  const [state, setState] = useState([])
  const open = url => window.open(url)
  return (
    <>
      <Header>
        <Formik
          initialValues={{search: ''}}
          validate={validate}
          onSubmit={async (values) => {
            document.getElementById('search').disabled = true
            fetch(`https://api.unsplash.com/search/photos?per_page=20&query=${values.search}`, {
              headers: {
                'Authorization': `Client-ID ${process.env.REACT_APP_KEY}`
              }  
            })
              .then(response => response.json())
              .then(async data => {
                setState(data.results)
                document.getElementById('search').disabled = false
              })
          }}
        >
          
            <Form>
              <Input id="search" type="text" name="search" placeholder="What are u looking for?"/>
            </Form>
          
        </Formik>
      </Header>
      <Main>
        <Images data={state} open={open} />
      </Main>
    </>
  )
}

export default App