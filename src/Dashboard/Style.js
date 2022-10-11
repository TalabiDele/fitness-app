import styled from "styled-components";

export const Container = styled.div`
  color: #5f5f5f;

  .complete {
    width: 80%;
    margin: 0rem auto 2rem auto;
  }

  .all {
    display: flex;
    justify-content: space-between;
    width: 80%;
    align-items: center;
    margin: auto;
  }

  .logout {
    border: none;
    padding: 0.5rem;
    border-radius: 20px;
    color: #ffa82d;
    font-weight: bold;
    padding: 1rem;
    font-size: 16px;
  }

  .user_details {
    width: 80%;
    margin: 4rem auto;
    display: flex;

    img {
      margin-right: 1rem;
    }
  }

  .name {
    color: #ffa82d;
  }

  div.container {
    display: grid;
    grid-template-columns: 60% 30% 10%;
    width: 80%;
    margin: auto;
    justify-items: center;
    align-items: flex-start;
  }

  .tasks {
    width: 100%;
  }

  .item {
    display: grid;
    margin-bottom: 2rem;
    grid-template-columns: 5% 50% 30% 15%;
    width: 100%;
    align-items: center;
    border-bottom: 1px solid #c0c0c0;
    padding-bottom: 2rem;

    span {
      width: 20px;
      height: 20px;
      border: 1px solid #ffa82d;
      border-radius: 50%;
    }

    h3 {
      background: #c0d3f9;
      padding: 1rem;
      width: 70%;
      text-align: center;
      border-radius: 25px;
    }

    button {
      border: none;
      padding: 0.5rem;
      color: #fff;
      border-radius: 20px;
      /* box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1); */
    }

    .finish {
      background: #ffa82d;
    }

    .disabled {
      background: #8d8d8d;
    }
  }

  .progress {
    text-align: center;
    margin-top: 3rem;

    .bar {
      width: 35rem;
      height: 2rem;
      background: #8d8d8d;
      /* z-index: ${({ isCompleted }) => (isCompleted === 0 ? "2" : "0")}; */
      display: flex;
      margin: 2rem auto;

      /* .load {
        background: #ffa82d;
      } */

      .load {
        transition: all 0.3 ease-in-out;
      }

      div.one {
        background: ${({ isCompleted }) =>
          isCompleted > 0 ? "#ffa82d" : "none"};
        height: 2rem;
        position: relative;
        z-index: ${({ one }) => (one ? "1" : "0")};
        width: 5rem;
      }
      div.two {
        background: ${({ isCompleted }) =>
          isCompleted > 1 ? "#ffa82d" : "none"};
        height: 2rem;
        position: relative;
        z-index: ${({ two }) => (two ? "1" : "0")};
        width: 5rem;
      }
      div.three {
        background: ${({ isCompleted }) =>
          isCompleted > 2 ? "#ffa82d" : "none"};
        height: 2rem;
        position: relative;
        z-index: ${({ three }) => (three ? "1" : "0")};
        width: 5rem;
      }
      div.four {
        background: ${({ isCompleted }) =>
          isCompleted > 3 ? "#ffa82d" : "none"};
        height: 2rem;
        position: relative;
        z-index: ${({ four }) => (four ? "1" : "0")};
        width: 5rem;
      }
      div.five {
        background: ${({ isCompleted }) =>
          isCompleted > 4 ? "#ffa82d" : "none"};
        height: 2rem;
        position: relative;
        z-index: ${({ five }) => (five ? "1" : "0")};
        width: 5rem;
      }
      div.six {
        background: ${({ isCompleted }) =>
          isCompleted > 5 ? "#ffa82d" : "none"};
        height: 2rem;
        position: relative;
        z-index: ${({ six }) => (six ? "1" : "0")};
        width: 5rem;
      }
      div.seven {
        background: ${({ isCompleted }) =>
          isCompleted > 6 ? "#ffa82d" : "none"};
        height: 2rem;
        position: relative;
        z-index: ${({ seven }) => (seven ? "1" : "0")};
        width: 5rem;
      }
    }
  }
`;

export const Wrapper = styled.div``;
