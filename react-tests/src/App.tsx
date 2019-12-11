import React, { useState } from 'react';
import { Formik, Form, Field } from 'formik'
import './App.css';

const App: React.FC = () => {
  const [result, setResult] = useState('')

  return (
    <main className="App">
      <h1>Formik Test</h1>
      <section>
        <Formik
        initialValues={{
          email: '',
          password: '',
        }}
        onSubmit={(values, actions) => {
          setResult(JSON.stringify(values, null, 2))
        }}
        >
          {() => (
            <Form>
              <Field 
                name="email"
                required
                placeholder="Email"
              />
              <br />
              <Field
                name="password"
                required
                placeholder="Password"
              />
              <br />
              <button type="submit" data-testid="submit">Submit</button>
            </Form>
          )}
        </Formik>
      </section>

      <section>
        Submitted Values
        <pre data-testid="results">
          { result }
        </pre>
      </section>
    </main>
  );        
}

export default App;
