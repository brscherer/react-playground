import React, { useState } from 'react';
import { Formik, Form, Field } from 'formik'
import './App.css';

const App: React.FC = () => {
  const [result, setResult] = useState('')

  return (
    <main className="App">
      <section>
        <Formik
        initialValues={{
          email: '',
          name: '',
          color: 'red'
        }}
        onSubmit={(values, actions) => {
          setResult(JSON.stringify(values))
        }}
        >
          {() => (
            <Form>
              <Field as="select" name="color" value="none">
                <option value="none">Pick a color</option>
                <option value="red">Red</option>
                <option value="green">Green</option>
                <option value="blue">Blue</option>
              </Field>
              <br />
              <Field 
                name="email"
                required
                placeholder="Email"
              />
              <br />
              <Field
                name="name"
                required
                placeholder="Name"
              />
              <br />
              <button type="submit">Submit</button>
            </Form>
          )}
        </Formik>
      </section>

      <section>
        <pre>
          { JSON.stringify(result, null, 2) }
        </pre>
      </section>
    </main>
  );        
}

export default App;
