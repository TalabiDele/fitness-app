import styled from "styled-components";

export const Container = styled.div`
  .cancel {
    z-index: 100;
    position: fixed;
    right: 34rem;
    top: 2rem;
    cursor: pointer;
  }

  .person {
    display: flex;
    gap: 1rem;
    /* align-items: center; */
    margin-bottom: 2rem;

    button {
      border: none;
      padding: 0.5rem;
      color: #fff;
      border-radius: 10px;
      background: #ffa82d;
      font-size: 12px;
      font-weight: bold;
      margin-top: 1rem;
      cursor: pointer;
    }

    p {
      font-size: 12px;
      margin-bottom: 0.5rem;
    }
  }

  img {
    border-radius: 50%;
  }
`;

export const Wrapper = styled.div``;
