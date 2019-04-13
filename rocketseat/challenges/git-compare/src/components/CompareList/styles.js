import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;

  margin-top: 56px;
`;

export const Repository = styled.div`
  width: 250px;
  background: #fff;
  border-radius: 3px;
  margin: 0 12px;

  display: flex;
  flex-direction: column;

  header {
    padding: 32px;
    display: flex;
    flex-direction: column;
    align-items: center;

    img {
      width: 64px;
    }

    strong {
      font-size: 24px;
      margin-top: 10px;
    }

    small {
      font-size: 14px;
      color: #666;
    }
  }

  ul {
    list-style: none;

    li {
      font-weight: bold;
      padding: 12px 20px;

      small {
        font-weight: normal;
        font-size: 12px;
        color: #999;
        font-style: italic;
      }

      &:nth-child(2n - 1) {
        background: #f5f5f5;
      }
    }
  }

  .button__container {
    width: calc(100% - 40px);
    margin: 20px;

    button {
      width: 100%;
      height: 48px;
      padding: 0 24px;
      margin: 5px 0;
      background: #63f5b8;
      color: #fff;
      border: 0;
      font-size: 20px;
      font-weight: bold;
      border-radius: 4px;

      span {
        margin-right: 20px;
      }

      &:hover {
        background: #52d89f;
      }
    }
  }
`;
