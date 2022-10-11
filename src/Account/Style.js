import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  align-items: center;

  .error {
    color: #d31313;
  }

  h1 {
    width: 40%;
    margin: 2rem auto;
    color: #525252;
  }

  .disable {
    background: #919191;
  }

  form {
    display: grid;
    width: 40%;
    margin: auto;

    input,
    select {
      padding: 1rem;
      font-size: 14px;
      border: none;
      border-bottom: 1px solid #919191;
      margin-bottom: 1rem;
    }

    button {
      border: none;
      padding: 1rem;
      font-size: 20px;
      font-weight: bold;
      border-radius: 20px;
      background: #ffa82d;
      color: #fff;
      cursor: pointer;
    }
  }

  p {
    text-align: center;
    margin-top: 2rem;
    font-size: 20px;

    a {
      color: #ffa82d;
      text-decoration: none;
    }
  }
`;
