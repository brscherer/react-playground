import React from 'react';
import { render, wait, fireEvent } from '@testing-library/react';
import App from './App';


describe('<App />' ,() => {
  it('should render app', () => {
    const { getByText } = render(<App />);
    const linkElement = getByText(/test/i);
    expect(linkElement).toBeInTheDocument();
  });
  
  it('should render email input', () => {
    const { getByPlaceholderText } = render(<App />);
    const emailInput = getByPlaceholderText(/email/i);
    expect(emailInput).toBeInTheDocument();
  });

  it('should render password input', () => {
    const { getByPlaceholderText } = render(<App />);
    const passwordInput = getByPlaceholderText(/password/i);
    expect(passwordInput).toBeInTheDocument();
  });

  it('should render button submit', () => {
    const { getByTestId } = render(<App />);
    const buttonSubmit = getByTestId("submit");
    expect(buttonSubmit).toBeInTheDocument();
  });

  it('should change email input value', async () => {
    const { getByPlaceholderText, debug } = render(<App />);
    const emailInput = getByPlaceholderText(/email/i);

    await wait(() => {
      fireEvent.change(emailInput, {
        target: {
          value: "mock@email.com"
        }
      })
    })

    expect(emailInput.value).toBe("mock@email.com");
  });

  it('should change password input value', async () => {
    const { getByPlaceholderText } = render(<App />);
    const passwordInput = getByPlaceholderText(/password/i);

    await wait(() => {
      fireEvent.change(passwordInput, {
        target: {
          value: "supersecretpassword123!@#"
        }
      })
    })

    expect(passwordInput.value).toBe("supersecretpassword123!@#");
  });

  it('should show submitted values', async () => {
    const { getByTestId, getByPlaceholderText } = render(<App />);
    const results = getByTestId("results");
    const passwordInput = getByPlaceholderText(/password/i);
    const emailInput = getByPlaceholderText(/email/i);
    const buttonSubmit = getByTestId("submit");

    await wait(() => {
      fireEvent.change(emailInput, {
        target: {
          value: "mock@email.com"
        }
      })
    })

    await wait(() => {
      fireEvent.change(passwordInput, {
        target: {
          value: "supersecretpassword123!@#"
        }
      })
    })

    await wait(() => {
      fireEvent.click(buttonSubmit)
    })

    const resultContent = {
      email: emailInput.value,
      password: passwordInput.value,
    }

    expect(results.innerHTML).toBe(JSON.stringify(resultContent, null, 2));
  });
  
})
