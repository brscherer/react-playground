import styled from 'styled-components';

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 64px;
`;

export const Form = styled.form`
  margin-top: 24px;
  width: 100%;
  max-width: 400px;
  display: flex;

  input {
    flex: 1;
    height: 56px;
    padding: 0 24px;
    background: #fff;
    font-size: 18px;
    color: #444;
    border-radius: 4px;

    border: ${props => (props.withError ? '1px solid #F00' : 0)};
  }

  button {
    width: 80px;
    height: 56px;
    padding: 0 24px;
    margin-left: 8px;
    background: #63f5b8;
    color: #fff;
    border: 0;
    font-size: 20px;
    font-weight: bold;
    border-radius: 4px;

    &:hover {
      background: #52d89f;
    }
  }
`;
