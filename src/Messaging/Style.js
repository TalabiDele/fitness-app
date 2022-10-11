import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  background: #5e5e5e99;
  z-index: 10;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: grid;
  align-items: center;

  .texting {
  }

  .message-container {
    background: #fff;
    width: 40%;
    margin: auto;
    height: 80vh;
    border-radius: 20px;
    position: relative;
    overflow-y: scroll;
    padding-top: 10rem;

    .contain {
      position: fixed;
      display: flex;
      justify-content: space-between;
      width: 40%;
      top: 5rem;
      z-index: 100;
    }

    .user {
      display: flex;
      gap: 1rem;
      margin: 2rem;
      background-color: #ffa82d;
      width: 90%;
      border-radius: 20px;
      align-items: center;
      padding: 0.5rem;
      color: #fff;
      z-index: 100;
      position: relative;
    }

    .messages {
      bottom: 8rem;
      position: absolute;
      display: grid;
      justify-items: flex-end;
      width: 100%;
      height: 50vh;
      overflow-y: scroll;
      width: 100%;
      padding-right: 3rem;
    }

    .message {
      /* margin-top: 1rem;
      border-radius: 10px;
      padding: 1rem; */

      .text {
        margin-top: 1rem;
      }

      p {
        background: #ffa82d;
        color: #fff;
        border-radius: 10px;
        padding: 1rem;
      }
    }

    form {
      position: absolute;
      bottom: 0;
      width: 90%;
      margin: 2rem auto;
      left: 0;
      right: 0;
      display: flex;
      justify-content: space-between;

      input {
        width: 80%;
        margin: auto;
        border: 1px solid #ffa82d;
        padding: 1rem;
        border-radius: 20px;
        font-size: 16px;
      }

      button {
        padding: 0.5rem;
        background: #ffa82d;
        border: 1px solid #ffa82d;
        border-radius: 20px;
        font-size: 24px;
        width: 10%;
        color: #fff;
        cursor: pointer;
      }
    }
  }
`;

export const Wrapper = styled.div``;
